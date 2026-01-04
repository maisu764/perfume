import React, { useState } from 'react';
import ProductList from './ProductList';
import { IoMdHeart } from 'react-icons/io';

const Products = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {
  const categories = ['All', 'Men', 'Women', 'Unisex', 'On Sale', 'New Arrival'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = ProductList.filter(item => {
    const matchesCategory =
      activeTab === 'All' ||
      (activeTab === 'New Arrival' && item.newArrival) ||
      (activeTab === 'On Sale' && item.onSale) ||
      activeTab === item.category;

    const matchesSearch =
      searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="product-section" className="max-w-[1200px] mx-auto px-10 py-10">
      {/* Tabs */}
      <div className="flex gap-3 justify-center items-center mt-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-8 py-2 rounded-full text-lg cursor-pointer
              ${activeTab === category ? 'bg-indigo-600 text-white' : 'bg-zinc-200 text-zinc-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Listing */}
      <div className="mt-12">
        {searchTerm && filteredItems.length === 0 ? (
          <p className="text-center text-xl font-semibold text-zinc-600">
            No Product Found
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-9">
            {filteredItems.map(product => (
              <div key={product.id}
                className="bg-zinc-100 p-3  border-zinc-300 rounded-lg flex flex-col min-h-[350px]
                transition-all duration-300 ease-out
      hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Header */}
                <div className="flex justify-between items-center">
                  <button className={`text-3xl cursor-pointer
                  ${wishlist.some(item => item.id === product.id) ?
                      'text-red-600' : 'text-zinc-300 hover:text-red-500'
                    }`}
                    onClick={() => addToWishlist(product)}>
                    <IoMdHeart />
                  </button>

                  {(product.onSale || product.newArrival) && (
                    <span
                      className={`px-3 py-1 text-white ${product.onSale ? 'bg-red-600' : 'bg-green-600'
                        }`}
                    >
                      {product.onSale ? 'Sale' : 'New'}
                    </span>
                  )}
                </div>

                {/* Image */}
                <div className="w-full h-[30vh] flex items-center justify-center">
                  <img src={product.image} alt={product.name} />
                </div>

                {/* Details */}
                <div className="text-center mt-6 flex flex-col flex-grow">
                  <h3 className="text-[1.4rem] font-semibold text-black">
                    {product.name}
                  </h3>

                  <div className="mt-2 mb-4">
                    {product.onSale && (
                      <span className="text-zinc-600 font-semibold line-through mr-4">
                        ${Number(product.oldPrice).toFixed(2)}
                      </span>
                    )}
                    <span className="text-red-600 font-semibold">${Number(product.price).toFixed(2)}</span>
                  </div>

                  {/* Button fixed to bottom */}
                  <button className="mt-auto bg-indigo-600 text-white text-lg py-2 w-full rounded-lg active:bg-indigo-700 cursor-pointer"
                    onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
