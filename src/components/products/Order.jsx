import moment from "moment"
import { CurrencyFormatter } from "../CurrencyFormatter"
import { getSession } from "next-auth/react";
import db from "../../../firebase";



const Order = ({id, amount, amountShipping, items, timestamp, images}) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div>
          <p className='font-bold text-xs'> ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className='text-xs font-bold'> TOTAL</p>
          <p>
            {CurrencyFormatter(amount, { code: "USD" })} - Next-Day Delivery {" "}
            {CurrencyFormatter(amountShipping, { code: "USD" })}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER# {id}
        </p>
      </div>

      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map((image, idx) => (
            <img 
              key={items[idx].id} 
              src={image} 
              alt={`${items[idx].description}`} 
              className="h-20 object-contain sm:h-32"
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Order;



export const getServerSideProps = async (context) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {}
    };
  }

  const stripeOrders = await db
    .collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100
        })
      ).data,
    }))
  );


  return {
    props: {
      orders,
      session
    }
  };
};