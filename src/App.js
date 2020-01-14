import React from "react";
import StripeButton from './Stripebutton'
import DatePicker from './DatePicker'

const total = 750
export default () => (
  <>
    <h1>Welcome to A Stripe Testing Account Demo</h1>
    <p style={{'color': 'red'}}>Please use an authorised testing card such as 
    those found at https://stripe.com/docs/testing, e.g. 5555 5555 5555 4444 
    with any future date and CVC</p>
    <StripeButton price={total} />

    <p>A date picker interface is also included and in the future will allow scheduled payments.</p>
    <DatePicker />
  </>
);
