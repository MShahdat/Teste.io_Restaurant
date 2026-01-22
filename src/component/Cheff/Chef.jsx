import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport, staggerContainer } from '../../motion/Motion';
import { MediaQuery } from '../hook/MediaQuery';

const chef = [
    {
        id: '1',
        name: 'Joël Robuchon',
        url: 'https://plus.unsplash.com/premium_photo-1661876511848-2e35ac92c15b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Master Chef',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque molestiae facilis delectus velit nostrum?',
    },
    {
        id: '2',
        name: 'Alain Ducasse',
        url: 'https://plus.unsplash.com/premium_photo-1661778158863-3be8743fbe3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Master Chef',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque molestiae facilis delectus velit nostrum?',
    },
    {
        id: '3',
        name: 'Gordon Ramsay',
        url: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Master Chef',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque molestiae facilis delectus velit nostrum?',
    },
    {
        id: '4',
        name: 'Adam Jhon',
        url: 'https://plus.unsplash.com/premium_photo-1687697860916-b05b982decbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tag: 'Master Chef',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi atque molestiae facilis delectus velit nostrum?',
    },
]


const Chef = () => {
    const isMobile = MediaQuery("(max-width: 768px)");

    return (
        <div className=' '>
            <div className='max-w-7xl px-4 py-16 mx-auto'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={defaultViewport}

                    className='flex flex-col items-center'>
                    <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>Specialist</p>
                    <h2 className='-mt-5 text-4xl md:text-4xl xl:text-4xl font-bold text-black/80'>Our Master chef</h2>
                </motion.div>
                <div

                    className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'
                >
                    {
                        chef.map((ch, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn("up", isMobile ? .2 : ((idx + 1) * 0.2) % 3)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{once: false}}
                                className='bg-white shadow-2xl h-128 hover:scale-102 duration-500 transform'
                            >
                                <div className='overflow-hidden'>
                                    <img src={ch.url} className=' h-84 w-full object-cover hover:scale-110  duration-700 transform' alt={ch.name} />
                                </div>
                                <div className='text-black py-2 px-4'>
                                    <p className='text-xl font-medium '>{ch.name}</p>
                                    <p className='mt-1 text-black/80 font-medium '>{ch.tag}</p>
                                    <p className='mt-2 leading-relaxed text-black/50 line-clamp-3'>{ch.msg}</p>
                                </div>
                                <div className='bg-red-500 w-12 h-8 mt-4'
                                    style={{ clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 60%, 0 100%, 0 0)' }}
                                />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;