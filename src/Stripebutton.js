import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default function Stripebutton({ price }) {
	const stripePrice = price * 100; //Stripe needs price in pence.
	const publishableKey = 'pk_test_CxNTlDYz3CAaIBeZKgMEReNr00VuWHOzOB';

	const onToken = token => {
		console.log(token); // Pass this token to the backend to process payments.
		alert('Payment was successful!, Your coding journey begins now! :-)');
	}

	return (
		<StripeCheckout
			stripeKey={publishableKey}
			label='Pay Now'
			name='Gray Ghost Coding'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is £${price}`}
			amount={stripePrice}
			panelLabel='Pay Now'
			token={onToken} // on success callback function that runs after a successful submit event.
		/> 
	)
}
