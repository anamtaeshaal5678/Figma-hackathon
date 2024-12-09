import Image from 'next/image';
import React from 'react';
const products = [
  {
    name: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    rating: 5,
    imgSrc: '/image 7.png',
  
  },
  {
    name: 'Courage Graphic T-shirt',
    price: 145,
    originalPrice: 145,
    rating: 4.5,
    imgSrc: '/image 2.png',
  },

  {
    name: 'Loose Fit Bermuda Shorts',
    price: 113.09,
    originalPrice: 150,
    rating: 4.8,
    imgSrc: '/image 3.png',
  },
  {
    name: 'Faded Skinny Jeans',
    price: 210,
    originalPrice: 210,
    rating: 4.6,
    imgSrc: '/image 5.png',
  },
];



const MyIndex = ()=> {
  return (
    <div className="min-h-screen bg-pink-200 ">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Top Selling</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-pink-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.imgSrc}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold text-gray-800">${product.price}</span>
                <span className="line-through ml-2 text-gray-500">${product.originalPrice}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-white">★</span>
                <span className="ml-2">{product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 const Index =()  =>{
    return (
      <div className="min-h-screen bg-pink-200">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Top Selling</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product,Index) => (
              <div
                key={` $ product.name}-${Index}`}
                className=" grid-items"
                >
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-semibold text-gray-800">${product.price}</span>
                  <span className="line-through ml-2 text-gray-500">${product.originalPrice}</span>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

 export default Index; 