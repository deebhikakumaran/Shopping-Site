import React from "react";

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-4 md:p-8">
      {/* <!-- Cart Items Section --> */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="divide-y divide-gray-200">
          {/* <!-- Individual Cart Item --> */}
          {cartItems.map((item) => (
            <div className="flex py-4 items-center" key={item.id}>
              <img
                className="w-16 h-16 rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500 uppercase">
                  {item.category}
                </p>
              </div>
              <div className="flex items-center">
                <div class="flex items-center">
                  <button
                    class="w-8 h-8 border border-gray-300 rounded-md flex justify-center items-center text-gray-500 hover:bg-gray-100"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span class="w-12 text-center font-semibold text-gray-700">
                    {item.quantity}
                  </span>

                  <button
                    class="w-8 h-8 border border-gray-300 rounded-md flex justify-center items-center text-gray-500 hover:bg-gray-100"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="ml-4 text-lg font-bold">${item.price}</p>
                <button
                  className="ml-4 text-red-500 hover:text-red-700 text-xl"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Summary Section --> */}
      {/* <div className="w-full md:w-1/3 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">4 Items in Cart</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-900 font-bold">$589</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Tax</p>
            <p className="text-gray-900 font-bold">$0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Shipping</p>
            <p className="text-gray-900 font-bold">$10</p>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>$599</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
            Confirm Payment
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100">
            Continue Shopping
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
