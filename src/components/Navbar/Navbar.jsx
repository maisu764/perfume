import React, { useEffect, useState } from "react";
import maisu from "../../../public/maisu.png";
import { IoMdHeart } from "react-icons/io";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({ handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, wishlist }) => {



    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
            <nav className="max-w-[1200px] mx-auto px-10 h-[10vh] flex items-center justify-between">
                <a href="#">
                    <img src={maisu} alt="logo" className="w-10 h-10" />

                </a>

                {/* Desktop Menu Example */}
                <ul className="flex gap-6 text-zinc">
                    <li><a href="#" className="font-semibold tracking-wider text-indigo-600">Home</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-indigo-600">About</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-indigo-600">Contact</a></li>
                    <li><a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-indigo-600">Blog</a></li>
                </ul>

                {/* Nav Action */}
                <div className="flex items-center gap-x-5">
                    {/* Input Field */}
                    <div className="flex p-1  border-2 rounded-full">
                        <input type="text" name="text" id="text" placeholder="Search...." autoComplete="off"
                            className="flex-1 h-[3vh] px-3 pt-2 focus:outline-none w-40"
                            onFocus={handleScroll}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="bg-gradient-to-b from-indigo-400 to-indigo-500 text-white w-7 h-7 flex justify-center items-center rounded-full text-xl">
                            <IoIosSearch />
                        </button>
                    </div>

                    <button className="text-[1.7rem] text-zinc-800 relative cursor-pointer">
                        <IoMdHeart className="text-red-600 text-3xl cursor-pointer" onClick={() => handlePanel('wishlist')} />
                        {
                            wishlist.length > 0 &&
                            <span className="flex justify-center items-center bg-black text-white w-5 h-5 rounded-full text-[12px] absolute top-4 right-3 border-2 border-white">
                                {wishlist.length}
                            </span>
                        }
                    </button>

                    <button className="text-indigo-600 text-3xl cursor-pointer relative " onClick={() => handlePanel('cart')}>
                        <RiShoppingBasketLine />
                        {
                            totalItems > 0 &&
                            <span className="flex justify-center items-center bg-black text-white w-5 h-5 rounded-full text-[12px] absolute top-4 right-4 border-2 border-white">
                                {totalItems}
                            </span>
                        }


                       
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
