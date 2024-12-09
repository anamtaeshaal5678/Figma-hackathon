import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Link from 'next/link';

const  Hero = () => {
  const products = [
    
    { id: 1, image: '/card.png', name: 'T-SHIRT WITH TAPE DETAILS', price: '$50' },
    { id: 2, image: '/card2.png', name: 'SKINNY FIT JEANS', price: '$30' },
    { id: 3, image: '/card3.png', name: 'CHECKERED SHIRT', price: '$40' },
    { id: 4, image: '/card4.png', name: 'SLEEVE STRIPED T-SHIRT', price: '$60' },

  ];


  return (
    <div className="bg-pink-200 min-h-screen py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">New Arrivals</h1>
        <p className="text-gray-700 mt-4">Check out our latest trendy products!</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="relative h-60">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
            </div>
          ))}
            </div>
</div>
            </div>
          )
        }
        export default Hero