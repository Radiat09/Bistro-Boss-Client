import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import useAxios from "../../hooks/useAxios/useAxios";
import useCart from "../../hooks/useCart/useCart";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState("");
  const axi = useAxios();
  const [carts, refetch] = useCart();
  const totalPrice = carts?.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axi
        .post("create-payment-intent", { price: parseFloat(totalPrice) })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data?.clientSecret);
        });
    }
  }, [axi, carts, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!stripe || !elements) {
      return console.log("1st error", setError("1st error"));
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return console.log("2nd error", setError("1st error"));
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[Error]", error, setError(error.message));
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      // setError(confirmError);
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent.id);
        setError("");

        // Now save the payment in the database
        const payment = {
          email: user?.email,
          name: user?.displayName,
          date: new Date(),
          menuItemIds: carts.map((cart) => cart?.menuId),
          cartIds: carts.map((cart) => cart?._id),
          status: "pending",
          total: totalPrice,
        };

        const res = await axi.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank your for giving me taka!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-secondary mt-10"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error && error}</p>
      {transactionId && (
        <p className="text-green-600">
          {"Your Transaction id is " + "  " + transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
