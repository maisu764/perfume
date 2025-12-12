import React from 'react'
import { TbPerfume } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className='bg-blue-300'>
            <nav className='max-w-[1200px] mx-auto px-10  h-[14vh] flex justify-between items-center '>

                {/* Logo */}
                <a href="#"><span className='text-red-600 font-bold'>F</span>ragro</a>


                {/* Desktop Menu */}
                <ul className='flex items-center gap-x-15'>

                    <li>
                        <a href="#" className='font-semibold tracking-wider text-blue-600 '>Shop</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider hover:text-blue-600'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider hover:text-blue-600'>Contact Us</a>
                    </li>
                </ul>

                {/* Nav Action */}

                <div className='flex items-center gap-x-5'>
                    {/* Input Field */}
                    <div className='flex  p-1 border-2 border-blue-500 rounded-full'>
                        <input type="text" name='text' id='text' placeholder='Search....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'  />
                        <button className='bg-gradient-to-b from-blue-600 to-blue-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoSearch /></button>
                    </div>
                    <a href="#" className='text-red-600 text-3xl'>
                        <TbPerfume />
                    </a>

                </div>

            </nav>
        </header>

    )
}

export default Navbar