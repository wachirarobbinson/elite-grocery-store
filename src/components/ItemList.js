import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const fruitsAndVegetables = await axios.get('https://grocery66api.onrender.com/fruits_and_vegetables');
        const dairyProducts = await axios.get('https://grocery66api.onrender.com/dairy_products');
        const meat = await axios.get('https://grocery66api.onrender.com/meat');
        const pantry = await axios.get('https://grocery66api.onrender.com/pantry');

        // Combine the fetched data from all categories into a single array
        const allItems = [
          ...fruitsAndVegetables.data,
          ...dairyProducts.data,
          ...meat.data,
          ...pantry.data,
        ];

        setItems(allItems); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []);

  const handleOrder = (item) => {
    // Check if the item is already in My Orders
    if (!myOrders.find((order) => order.itemname === item.itemname)) {
      // Add the item to My Orders
      setMyOrders((prevOrders) => [...prevOrders, item]);
    }
  };

  const handleRemove = (itemName) => {
    // Remove the item from My Orders
    setMyOrders((prevOrders) => prevOrders.filter((order) => order.itemname !== itemName));
  };

  return (
    <div className="container mx-auto p-1">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="flex flex-wrap -mx-4">
        {myOrders.map((order) => (
          <div key={order.itemname} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img src={order.imageurl} alt={order.itemname} className="w-full h-32 object-cover mb-2" />
              <span className="block font-semibold">{order.itemname}</span>
              <span className="block text-gray-500">${order.price}</span>
              <button
                className="block mt-4 p-2 px-4 bg-red-600 text-white rounded-md"
                onClick={() => handleRemove(order.itemname)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Item List</h2>
      <div className="flex flex-wrap -mx-4">
        {items.map((item) => (
          <div key={item.itemname} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img src={item.imageurl} alt={item.itemname} className="w-full h-32 object-cover mb-2" />
              <span className="block font-semibold">{item.itemname}</span>
              <span className="block text-gray-500">${item.price}</span>
              <button
                className="block mt-4 p-2 px-4 bg-green-600 text-white rounded-md"
                onClick={() => handleOrder(item)}
              >
                Order <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
