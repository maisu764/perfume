import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        <section className='py-14'>
            <div className='flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-10 gap-10'>

                {/* Hero Text */}
                <div className='flex flex-col gap-5 max-w-lg'>
                    <span className=' bg-blue-100 text-blue-500 text-lg px-5 py-2 rounded-full'>
                        Fragrance Beyond Compare...
                    </span>

                    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                        Discover Your Signature Scent
                    </h1>

                    <p className='text-gray-600'>
                        Premium perfumes crafted to elevate your presence.
                        Experience the essence of luxury.
                    </p>

                    <button className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition hover:cursor'>
                        Shop Now
                    </button>
                </div>

                {/* Hero Image (Bigger + Right aligned) */}
                <div className='flex justify-end w-full'>
                    <img 
                        src={hero} 
                        alt="Perfume Hero" 
                        className='w-full max-w-[350px] md:max-w-[450px] lg:max-w-[450px]'
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero
