import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { getSession, useSession } from 'next-auth/react';

import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlice';
import { CurrencyFormatter } from '../components/CurrencyFormatter';
import CheckoutProduct from '../components/products/CheckoutProduct';


const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session, status } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    // redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    });

    // if (result.error) alert(result.error.message);
    result.error && alert(result.error.message);

  };

  return (
    <div className='bg-gray-100'>
      <Header/>

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your Current Basket is Empty' : 'Shopping Basket'}
            </h1>
            {items.map((item, idx) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image} />
            ))}
          </div>
        </div>
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items): {" "}
                <span className="font-bold">
                  {CurrencyFormatter(total, {code: "USD"})}
                </span>
              </h2>
              <button 
                role='link'
                onClick={createCheckoutSession}
                disabled={!session}
                className={
                `button mt-2 ${!session && 
                'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  };
};