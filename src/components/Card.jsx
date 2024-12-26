import React, { useState, useEffect } from "react";

function Card({ product, addToCart }) {

  return (
    <div class="relative group">
      <div class="w-full h-40 bg-white flex items-center justify-center p-2">
        <img
          class="max-h-full max-w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="mt-4 bg-yellow-500 w-full text-black px-4 py-3 text-sm font-medium"
            onClick={() => {
              addToCart(product)
            }}
          >
            Add To Cart
          </button>
        </div>

      <div class="p-2 m-2">
        <p class="text-gray-700 text-xs font-semibold uppercase">
          {product.category}
        </p>
        <h3 class="font-bold text-lg text-gray-900 mt-2">{product.title}</h3>
        <div class="mt-2 flex justify-between">
          <span class="text-yellow-400 text-xl">★★★★★</span>
          <span class="text-sm font-semibold text-gray-500">
            {product.rating.count} Reviews
          </span>
        </div>
        <p class="text-lg font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
}

export default Card;
