import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import banners from '../data/bannerImages' // your array of images
=======
import banners from '../../data/bannerImages' // your array of images
>>>>>>> a652b11fa0d6a3e443a56bd6d7d53eeb6c490a81

const Hero = () => {
  const [current, setCurrent] = useState(0)

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === banners.length - 1 ? 0 : current + 1)
  }

  return (
    <section className="pt-2 mt-[10vh]">
      {/* Center container with max width and px-10 */}
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">

          {/* Banner Image */}
          <img
            src={banners[current]}
            alt="Banner"
            className="w-full h-full object-contain transition-all duration-700 "
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black"
          >
            ❯
          </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
