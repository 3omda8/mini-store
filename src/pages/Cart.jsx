import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [itemCounts, setItemCounts] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Calculate the total price dynamically
  const totalPrice = cartItems.reduce(
    (total, item) => total + itemCounts[item.id] * item.price,
    0
  );

  function increment(itemId) {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  }

  function decrement(itemId) {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  }

  return (
    <div className="bg-gray-300 min-h-screen h-full">
      <Link to="/">
        <button
          type="button"
          className="m-8 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Back to Home Page
        </button>
      </Link>
      <section className="py-10">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto bg-white rounded-xl py-4">
          <h1 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border-2 bg-white border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
              >
                <div className="col-span-12 lg:col-span-2 img box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-lg:w-full lg:w-[160px] rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between w-full mb-4">
                      <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                        {item.title}
                      </h5>
                      <button
                        className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                            cx="17"
                            cy="17"
                            r="17"
                          />
                          <path
                            className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                            d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                            stroke="#EF4444"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <button
                          className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                          onClick={() => decrement(item.id)}
                        >
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 9.5H13.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="number"
                          className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                          value={itemCounts[item.id]}
                          readOnly
                        />
                        <button
                          className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                          onClick={() => increment(item.id)}
                        >
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 9.5H14.25M9 14.75V4.25"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                        ${item.price}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h2 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Total Price
            </h2>

            <div className="flex items-center justify-between gap-5 ">
              <h3 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
                ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <button className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartPage;
