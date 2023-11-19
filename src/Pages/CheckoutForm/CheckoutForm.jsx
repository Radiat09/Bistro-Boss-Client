import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { set } from "react-hook-form";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

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
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-600">{error && error}</p>
    </form>
  );
};

export default CheckoutForm;
