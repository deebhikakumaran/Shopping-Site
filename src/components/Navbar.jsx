import React, { useState } from "react";

function Navbar({ count, cartItems, removeFromCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-6">
      <a href="#" className="text-xl font-bold text-gray-800">
        SHOPIFY
      </a>
      {/* <div className="flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-red-500">
          Category
        </a>
        <a href="#" className="hover:text-red-500">
          Brands
        </a>
        <a href="#" className="hover:text-red-500">
          Customer Support
        </a>
      </div> */}
      <div className="relative">
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
        <button
          className="p-2 bg-gray-100 rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h18l-2 13H5L3 3zm3 16a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z"
            ></path>
          </svg>
        </button>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✖
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map((product) => (
                  <div className="flex py-4 items-center" key={product.id}>
                    <img
                      className="w-16 h-16 rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-xs text-gray-500 uppercase">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="ml-4 text-lg font-bold">${product.price}</p>
                      <button
                        className="ml-4 text-red-500 hover:text-red-700 text-xl"
                        onClick={() => {
                          removeFromCart(product);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
