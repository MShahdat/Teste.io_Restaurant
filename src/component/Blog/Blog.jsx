import React from 'react';
import { FaComment } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
const Blog = (props) => {

    return (
        <div className='bg-white text-black '>
            <div className='max-w-7xl px-4 py-8 mx-auto'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}
                    className='flex flex-col items-center py-8'>
                    <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>Recent Activity</p>
                    <h2 className='-mt-5 text-3xl md:text-4xl font-bold text-black/80'>Our Latest Blogs</h2>
                </motion.div>
                <div className='mt-8 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        props.blog.map((item, idx) => {
                            return (
                                <motion.div
                                    variants={fadeIn('up', 0.2)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                                    key={idx}
                                >
                                    <Link to={`/blogs/${item.id}`} className='bg-white h-108 relative shadow-2xl flex flex-col gap-2 pb-2 hover:scale-102 duration-500 transform'>

                                        <div className='overflow-hidden'>
                                            <img src={item.url} className='w-full h-64 object-cover hover:scale-110 duration-700 transform'></img>
                                        </div>
                                        <div className='px-2'>
                                            <div className='uppercase text-[13px] text-black/60 font-medium flex items-center gap-2 mt-4'>
                                                <p className='tracking-wide'>{item.date}</p>
                                                <p className='tracking-wide'>{item.post}</p>
                                            </div>
                                            <h3 className='text-lg mt-4 font-bold line-clamp-2 text-black tracking-wider'>{item.title}</h3>

                                            <div className='flex items-center justify-between absolute bottom-4 right-2 left-2'>
                                                <div className='bg-red-600 cursor-pointer  text-white active:bg-red-700 px-2 py-1 rounded font-semibold'>Read more</div>
                                                <div
                                                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 52% 74%, 17% 100%, 26% 74%, 0% 75%)' }}
                                                    className='bg-black/10 rounded w-8 h-9 mt-2'>
                                                    <p className='text-black font-bold text-center'>{item.comment}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </Link>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;