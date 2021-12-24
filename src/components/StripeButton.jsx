import  React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) =>{
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51K9hmBSCzriYM6S8RWycQ3wWjjdFkh0zRCRBlz1s75s2q27jTGZ2zwk8f9zkRTAbpd2LEjbfd4zRAZ1MkgKzuar300dXbHIF3X'

    const onToken = token =>{
        console.log(token)
        alert("Payment Successful")
    }
    return(
        <StripeCheckout
         label="Pay Now"
         name="Exclusive Fashion Ltd."
         billingAddress
         shippingAddress
         description={`Your Total ₹${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeButton