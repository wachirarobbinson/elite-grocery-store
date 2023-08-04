import React from 'react';

const Products = () => {
  return (
    <div className="products mx-auto p-1">
      <div className="grid grid-cols-4 gap-6">
        <div className="category">
          <h3 className="h3-horizontal bg-green-500 px-4 py-2 cursor-pointer transition-colors duration-300 text-white text-center rounded-t-lg hover:bg-green-600">
            Fruits & Vegetables
          </h3>
          <ul className="hidden-list bg-white shadow-md rounded-b-lg py-2 px-4">
            <li>Cabbages</li>
            <li>Mangoes</li>
            <li>Apples</li>
            <li>Grapes</li>
            <li>Strawberries</li>
            <li>Melons</li>
            <li>Avocados</li>
            <li>Blueberries</li>
            <li>Potatoes</li>
            <li>Onions</li>
            <li>Tomatoes</li>
            <li>Lettuce</li>
            <li>Carrots</li>
            <li>Peppers</li>
            <li>Cucumbers</li>
            <li>Celery</li>
          </ul>
        </div>
        
<div>
     <h3 className="h3-horizontal bg-green-500 px-4 py-2 cursor-pointer transition-colors duration-300 text-white text-center rounded-t-lg hover:bg-green-600">
            Dairy Products
          </h3>
        <ul className="hidden-list bg-white shadow-md rounded-b-lg py-2 px-4">
             <li>Milk</li>
            <li>Cheese</li>
            <li>Butter</li>
            <li>Yogurt</li>
            <li>Ice Cream</li>
        </ul>
</div>
<div>
     <h3 className="h3-horizontal bg-green-500 px-4 py-2 cursor-pointer transition-colors duration-300 text-white text-center rounded-t-lg hover:bg-green-600">
            Meat Product 
          </h3>
        <ul className="hidden-list bg-white shadow-md rounded-b-lg py-2 px-4">
            <li>Pork</li>
            <li>Beef</li>
            <li>Chicken</li>
            <li>Mutton</li>
            <li>Seafood</li>
            <li>Fresh Fish</li>
            <li>Lobster</li>
            <li>Mussels</li>
            <li>Oysters</li>
            <li>Scallops</li>
        </ul>
</div>
<div>
     <h3 className="h3-horizontal bg-green-500 px-4 py-2 cursor-pointer transition-colors duration-300 text-white text-center rounded-t-lg hover:bg-green-600">
            Pantry 
          </h3>
        <ul className="hidden-list bg-white shadow-md rounded-b-lg py-2 px-4">
            <li>Rice</li>
            <li>Pasta</li>
            <li>Cooking Oil</li>
            <li>Ginger</li>
            <li>Pepper</li>
        </ul>
</div>




      </div>
    </div>
  );
};

export default Products;
