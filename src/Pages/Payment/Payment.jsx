import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

// TODO : add Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_API_PK);
const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle heading={"Payment"} subHeading={""}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
