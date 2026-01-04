import React from 'react'

const OrderPlace = ({setOrderPlaced}) => {
    return (
        <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-[100]'>
            <div className='bg-zinc-100 p-8 text-center w-[400px] rounded-lg border-1 border-zinc-300'>
                <h2 className='text-3xl text-green-600 font-bold '>Order Placed</h2>
                <p className='text-zinc-800 my-4'>Thanks for your Purchase!</p>
                <button className='px-6 py-3 text-white bg-indigo-600 active:bg-indigo-700 rounded-lg' 
                onClick={()=>setOrderPlaced(false)}>Close</button>
            </div>
        </section>
    )
}

export default OrderPlace