import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';
import BackButton from '../components/BackButton';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

export default function Payment( {session} ) {

  const fetchClientSecret = useCallback(async () => {

    if (!session?.user?.email) {
      throw new Error('User email is not available');
    }

    const res = await fetch(
      `http://localhost:8000/create-checkout-session-saas-docs`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerEmail:  session?.user?.email || '' }),
      }
    );
    if (!res.ok) throw new Error('Failed to fetch client secret');
    const { clientSecret } = await res.json();
    return clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout className='mt-10'/>
        <BackButton />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
