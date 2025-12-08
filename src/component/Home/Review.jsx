import React, { useRef, useState } from 'react';
import { review } from '../../../public/Review';
import { IoStar } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
const Review = () => {

  const slickRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  var settings = {
    // we'll render our own dots so we can control exact placement
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),

  };

  return (
    <div className='bg-white text-black'>
      <div className='max-w-7xl px-4 py-0 lg:py-8 mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={defaultViewport}
          className='flex flex-col items-center py-8'>
          <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>Custermer Says</p>
          <h2 className='-mt-5 text-3xl md:text-4xl font-bold text-black/80'>Happy Customer</h2>
        </motion.div>
        <div className='relative pb-8'>
          <Slider ref={slickRef} {...settings}>
            {
              review.map((rev, idx) => (
                <div key={idx} className='mt-2 lg:mt-8 sm:px-8 md:px-20 lg:px-30 flex flex-col items-center justify-center'>
                  <img src={rev.image} className='w-32 h-32 mx-auto object-cover rounded-full border-4 border-red-600'></img>
                  <p className='text-center mt-6 text-md sm:text-lg lg:text-xl text-black/70'>{rev.msg}</p>
                  <div className='mt-4 flex items-center gap-1 justify-center'>
                    {[...Array(rev.rating)].map((_, i) => (
                      <div key={i}>
                        <IoStar className='text-red-700 size-5' />
                      </div>
                    ))}
                  </div>
                  <p className='mt-4 text-center sm:text-lg lg:text-xl font-bold'>{rev.name}, <span>{rev.place}</span></p>
                </div>
              ))
            }

          </Slider>

          {/* Custom dots placed at bottom center */}
          <div className="absolute left-0 right-0 bottom-2 lg:-bottom-2 flex justify-center">
            <div className="flex gap-3">
              {review.map((_, i) => (
                <button
                  key={i}
                  onClick={() => slickRef.current && slickRef.current.slickGoTo(i)}
                  className={`w-3 h-3 rounded-full transition-colors duration-150 ${currentSlide === i ? 'bg-red-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Review;