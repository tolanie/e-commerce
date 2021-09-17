import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jam1uI8KWc08r0vixSqSgwcg5NycmNQJRNzVkqcxHZ5hTuj7zBKw7BBO4M5n3r0auOHmDuhUd03uwn66PYIaCmu00kmpfIJMJ';

  const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

return (
    <StripeCheckout
    label = 'Pay Now'
    name = 'CRWN Clothing LTD'
    billingAddress
    shippingAddress
    image= 'https://svgshare.com/i/CUz.svg'
    description = {`Your total is $${price}`}
    amount = {priceForStripe}
    panelLabel = 'Pay Now'
    token ={onToken}
    stripeKey = {publishableKey}
    />
);
};

export default StripeCheckoutButton;