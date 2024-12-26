import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCartItems((prevCart) => [...prevCart, product]);
      setCount(count + 1);
    } else {
      alert("Item already added to the cart!");
    }
  };

  const removeFromCart = (product) => {
    const filteredCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filteredCart);
    setCount(count - 1);
    alert("Item removed from cart!");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
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
    <div class="bg-white py-8">
      <div class="container mx-auto px-4">
        <Navbar
          count={count}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />

        <div class="max-w-7xl mx-auto py-10 px-5">
          <h2 class="text-3xl font-bold text-gray-900">Products</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 p-2">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
