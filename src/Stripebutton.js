import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function Stripebutton({ price }) {
	const stripePrice = price * 100; //Stripe needs price in pence.
	const publishableKey = 'pk_test_CxNTlDYz3CAaIBeZKgMEReNr00VuWHOzOB';

	const onToken = token => {
		console.log(token);
		axios({
			url: 'payment', 
			method: 'post', 
			data: {
				amount: stripePrice,
				token
			}
		}).then(response => {
			console.log('Payment Success, the response is ', JSON.parse(response));
			alert('Payment was successful!, Your coding journey begins now! :-)'); 
		}).catch(error => {
			console.log('Payment Error', JSON.parse(error));
			alert('There was an issue with your payment')
		})
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
