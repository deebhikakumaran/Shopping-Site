import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateQuantity = (productId, newQuantity) => {
      if (newQuantity < 1) return;
      const updatedCart = cartItems.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      );
      setCart(updatedCart);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div class="max-w-7xl mx-auto py-10 px-5">
      <h2 class="text-3xl font-bold text-gray-900">Popular Categories</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categories.map((category) => (
          <div class="relative group">
            <img
              src="https://via.placeholder.com/300x200"
              alt={category}
              class="w-full h-56 object-cover rounded-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 class="text-white text-lg font-semibold uppercase">
                {category}
              </h3>
              <p class="text-gray-200 text-sm">3,495 Products</p>
              <button class="mt-4 bg-white text-black px-4 py-2 text-sm font-medium rounded-lg">
                Shop Now
              </button>
            </div>
            {/* <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 uppercase">
                {category}
              </h3>
            </div> */}
          </div>
        ))}

        {/* <div class="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Accessories"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-900">Accessories</h3>
            <p class="text-sm text-gray-600">2,483 Products</p>
            <a
              href="#"
              class="inline-block mt-3 bg-black text-white py-2 px-4 rounded-full text-center"
            >
              Shop Now
            </a>
          </div>
        </div>  */}

        {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
        <img class="w-full h-40 object-cover rounded" src="https://via.placeholder.com/150" alt="Fashion" />
        <h3 class="mt-2 font-semibold text-lg text-gray-800">Fashion</h3>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
        <img class="w-full h-40 object-cover rounded" src="https://via.placeholder.com/150" alt="Cosmetics" />
        <h3 class="mt-2 font-semibold text-lg text-gray-800">Cosmetics</h3>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
        <img class="w-full h-40 object-cover rounded" src="https://via.placeholder.com/150" alt="Gadgets" />
        <h3 class=" mt-2 font-semibold text-lg text-gray-800">Gadgets</h3>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
        <img class="w-full h-40 object-cover rounded" src="https://via.placeholder.com/150" alt="Pets"/>
        <h3 class="mt-2 font-semibold text-lg text-gray-800">Pets</h3>
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default Categories;
