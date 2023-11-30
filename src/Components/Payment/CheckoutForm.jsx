import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.post('/create-payment-intent', {price: '500'})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosPublic])


    const handleSUbmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if( card == null){
            return;
        }

          // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }
    };

    return (
        <form onSubmit={handleSUbmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className="flex flex-col text-center justify-center items-center">
      <button className=" text-black rounded-md py-1 w-fit" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button> 
      
      <p className="text-red-600">{error}</p>
      </div>
        </form>
    );
};

export default CheckoutForm;