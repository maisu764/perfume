import React, { useState } from 'react'
import ProductList from './ProductList'
import { IoMdHeart } from 'react-icons/io';

// import { IoMdHeart } from 'react-icons/io';

const Products = () => {

    const categories = ['All', 'Men', 'Women', 'Unisex', 'On Sale', 'New Arrival']

    const [activeTab, setActiveTab] = useState('All');

    const renderProducts = ProductList.map(product => {
        return (
            // Card
            <div className='bg-zinc-100 p-3 border-1 border-zinc-300 rounded-lg'>
                <div className='flex justify-between items-center'>
                    <button className='text-3xl text-zinc-300'>
                        <IoMdHeart />
                    </button>
                    <span className='bg-red-600 px-3 py-1 text-white'>Sale</span>
                </div>

                {/* Product Image */}

                <div className=' w-full h-[30vh] flex items-center justify-center '>
                    <img src={product.image} />

                </div>


                {/* Product Detail */}

                <div className='text-center mt-8'>
                    <h3 className='text-[1.4rem] font-semibold'>{product.name}</h3>
                    <div className='mt-1 mb-5'>
                        <span className='text-red-600 font-semibold'>${product.price}</span>
                        <div>
                            <button className='bg-indigo-600 text-white text-lg cursor-pointer py-2 w-full rounded-lg active:bg-indigo-700 mt-10'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='max-w-[1200px] mx-auto px-10 py-10'>
            {/* Tab */}
            <div className='flex gap-3 justify-center item-center mt-8'>
                {
                    categories.map(category => {
                        return (
                            <button key={category} className={`px-8 py-2 rounded-full text-lg cursor-pointer
            ${activeTab === category ? 'bg-indigo-600 text-white' : 'bg-zinc-200 text-zinc-800'}`}
                                onClick={() => setActiveTab(category)}>
                                {category}
                            </button >
                        )
                    })
                }
            </div>

            {/* Product Listing */}

            <div className='grid grid-cols-4 gap-9 mt-12'>
                {renderProducts}
            </div>

        </section>
    )
}

export default Products