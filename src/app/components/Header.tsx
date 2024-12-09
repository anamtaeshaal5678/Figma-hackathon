import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className='bg-pink-200 '>
            {/*MAIN CONTENER*/}
            <div className='max-w w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between py-16'>
                {/*left section */}
                <div className="text-center lg:text-left max-w-lg">
                    <h1 className=' text-4xl  lg:text-6xl font-extrabold text-gray-900 leading-tight">'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='text-gray-700 mt-4 text-lg'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className='mt-6 px-8 py-3 bg-black text-white hover:bg-gray-800 transition'>
                        Shop Now
                    </button>
                </div>
                {/*right section */}
                <div className='flex-shrink-0'>
                    <Image
                        src="/card1.png"
                        alt="Fashion Image"
                        width={500}
                        height={600}
                        className='rounded-xl'
                    />
                </div>
            </div>
            {/* brand logos*/}
            <div className='bg-black py-6'>
                <div className='max-w-7xl mx-auto flex justify-around items-center px-6 lg:px-16'>
                    <p className="text-white text-lg font-bold">VERSACE</p>
                    <p className="text-white text-lg font-bold">ZARA</p>
                    <p className="text-white text-lg font-bold">GUSSI</p>
                    <p className="text-white text-lg font-bold">PARDA</p>
                    <p className="text-white text-lg font-bold">CALVIN KLEIN</p>

                </div>

            </div>
        </div>

    )
}

export default Header