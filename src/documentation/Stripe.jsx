import CodeBlock from "../assets/CodeBlock"
const Stripe = () => {

    return (
        <div className="ml-12 py-12">
            <div className="flex flex-row gap-1 items-center mb-12">
                <h1 className="text-3xl md:text-4xl">Stripe</h1>
                <img src="/Stripe.png" alt="Stripe" className="w-12 h-12" />
            </div>

            {/* Build business */}
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center">
                    <span className="text-2xl text-black ">Setup Stripe Account</span>
                    <img src="/Stripe.png" alt="Stripe" className="w-8 h-8" />
                </div>
                <p>
                    To get started with Stripe, you'll need to create an account on their website. Once you have an account, you can obtain your API keys from the dashboard.
                </p>
                <div className="mt-4 space-y-4 text-sm md:text-md">
                    <p className="text-sm text-gray-500">
                        Visit <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Stripe</a> to create your account.
                    </p>
                    <p>If you want to remain in test mode for Stripe, where no real transactions are processed, you can use the test API keys provided in your Stripe dashboard.</p>
                    <p>Go to <a href="https://dashboard.stripe.com/test/apikeys" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Stripe Test Mode</a> to find your test API keys.</p>
                </div>
            </div>

            {/* Stripe Integration */}
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center mt-12">
                    <span className="text-2xl text-black">Integrating Stripe</span>
                    <img src="/Stripe.png" alt="Stripe" className="w-8 h-8" />
                    <img src="/React.png" alt="React" className="w-8 h-8" />
                </div>
                <p>
                    To integrate Stripe into your application, you can use the official Stripe SDK. Install it using npm:
                </p>
                <div className="mt-4 space-y-4 text-sm md:text-md">
                    <CodeBlock text="npm install @stripe/stripe-js" />
                    <p>Next, you can initialize Stripe in your application:</p>
                    <CodeBlock text={`import { loadStripe } from '@stripe/stripe-js';\n\nconst stripePromise = loadStripe('your-publishable-key');`} />
                    <p>Replace 'your-publishable-key' with your actual Stripe publishable key by adding it to your .env file:</p>
                    <CodeBlock text={`VITE_STRIPE_PUBLISHABLE_KEY=your-publishable-key`} />
                    <p>Now we just need to create the product. Head over to <a href="https://dashboard.stripe.com/products" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Stripe Dashboard</a> to create a new product.</p>
                    <p>Once you have created the product, you will need to retrieve the <span className='text-white dark:bg-gray-800 p-1 rounded-lg'>Price ID</span> <span className='text-xs'>(NOT THE PRODUCT ID)</span> to use in your application. We will add this to the backend .env file.</p>
                </div>
            </div>

            {/* Creating Checkout Session */}
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center mt-12">
                    <span className="text-2xl text-black">Creating a Checkout Session</span>
                    <img src="/node.png" alt="Node.js" className="w-8 h-8" />
                </div>
                <p>
                    To create a checkout session, you need to set up an endpoint in your backend that handles the creation of the session. Here's how we can do this:
                </p>
                <div className="mt-4 space-y-4 text-sm md:text-md">
                    <p>We will be using  <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>Express.js</span> for our backend. Which is a <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>Node.js</span> framework for handling HTTP requests. Make sure to create a separate folder from the Vite frontend project</p>
                    <p>First we need to install the necessary packages using NPM</p>
                    <CodeBlock text={`npm install express cors stripe dotenv`} />
                    <p>The Express package is the framework that allows us to easily create server-side applications in Node.js. CORS is a middleware that enables Cross-Origin Resource Sharing, which is necessary for our frontend to communicate with our backend. Stripe is the payment processing library we'll be using, and dotenv is used to manage environment variables.</p>
                    <p>Next, add your <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>STRIPE_SECRET_KEY</span> and <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>STRIPE_PRICE_ID</span> to the backend .env file:</p>
                    <CodeBlock text={`STRIPE_SECRET_KEY=your-secret-key\nSTRIPE_PRICE_ID=your-price-id`} />
                    <p>Now, create a file named <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>server.js</span> inside the backend folder and add the following code:</p>
                    <CodeBlock text="
// server.js

const express = require('express');
const cors = require('cors'); 
dotenv = require('dotenv');
dotenv.config();

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session-demo', async (req, res) => {
  try {
    const { customerEmail } = req.body;

    if (!customerEmail) {
      return res.status(400).json({ error: 'Missing customerEmail' });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        }
      ],
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: '',
      metadata: { customerEmail },
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({ error: 'Failed to create checkout session' });
  }
});


app.listen(8000, () => console.log('Server running on port 8000'));
                    " />
                <p>In this code block, we set up an Express.js server with CORS, dotenv, and the Stripe library. Then we define a POST endpoint for creating a Stripe checkout session for the product. This endpoint takes in the customers email in the body for use later, creates the checkout session, and returns the client secret</p>
                </div>
            </div>

            {/* Frontend Integration */}
            <div>
                <div className="flex flex-row gap-1 items-center mt-12 text-2xl">
                    <p className="">Connecting to React</p>
                    <img src="/React.png" alt="React" className="w-8 h-8" />
                </div>
                <div>
                    <p>Now that we have our express server running on port 8000, we can connect our React frontend to it.</p>
                    <div className="mt-4 space-y-4 text-sm md:text-md">
                        <p>First, we need to install the Stripe.js library in our React project:</p>
                        <CodeBlock text="npm install @stripe/react-stripe-js @stripe/stripe-js" />
                        <p>Next, we can create a new component for handling the checkout process. Create a component called <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">src/Payment.jsx</span> Here's the code for this component:</p>
                        <CodeBlock text={`
// src/Payment.jsx

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
      "http://localhost:8000/create-checkout-session",
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
        <EmbeddedCheckout/>
      </EmbeddedCheckoutProvider>
    </div>
  );
}
    
                        `} />

                        <p>In <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">Payment.jsx</span> we set up Stripe integration by first loading the Stripe library via our Publishable Key which is stored in our .env file. We then create a payment form using the <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">EmbeddedCheckout</span> component and handle the creation of the checkout session on the server side.</p>
                        <p>Finally, we render the <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">Payment.jsx</span> component within <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">App.jsx</span> and pass the user session as a prop.</p>
                        <p>In <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">App.js</span> we add the following route:</p>
                        <CodeBlock text={`<Route path="/payment" element={<Payment session={session} />`} />
                        <p>Now when you have a <span className="text-green-300 dark:bg-gray-800 p-1 rounded-lg">Link</span> pointing to `/payment`, it will render the Payment component. It is also advisable to protect this route and ensure only authenticated users can access it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stripe