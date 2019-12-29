import React from "react";
import StripeButton from './Stripebutton'

const total = 750
export default () => (
  <>
    <h1>Welcome to React Parcel Micro App!</h1>
    <p style={{'color': 'red'}}>Please use an authorised testing card such as 
    those found at https://stripe.com/docs/testing, e.g. 5555 5555 5555 4444 
    with any future date and CVC</p>
    <StripeButton price={total} />
  </>
);
