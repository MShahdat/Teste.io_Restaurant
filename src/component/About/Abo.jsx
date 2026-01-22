import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
const Abo = () => {
    return (
        <div className='text-black bg-white'>
            <div className='max-w-7xl px-4 py-8 lg:py-16 mx-auto flex flex-col md:flex-row gap-2'>
                <div className='w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-2'>
                    <motion.img
                    variants={fadeIn('up', 0.2)}
                                    initial = {'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                    src='https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-96 sm:h-full sm:w-1/2 object-cover'></motion.img>
                    <motion.img
                    variants={fadeIn('up', 0.6)}
                                    initial = {'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                    src='https://images.unsplash.com/photo-1650490587135-815f6fbf6e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-full h-96 sm:h-full sm:w-1/2  object-cover'></motion.img>
                </div>
                <div className='w-full md:w-1/2 px-4 lg:px-12 lg:py-6'>
                    <motion.div
                    variants={fadeIn('up', 0.2)}
                                    initial = {'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                    >
                        <h2 className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>This is our secrets</h2>
                    <h2 className='text-3xl lg:text-4xl -mt-6 font-bold text-black/80 '>Perfect Ingredients</h2>
                    </motion.div>
                    <motion.p
                    variants={fadeIn('up', 0.4)}
                                    initial = {'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                    className='mt-4 lg:mt-8 text-[16px] sm:text-[17px] lg:text-[18px] text-black/40 leading-relaxed tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quos veritatis quibusdam voluptate totam debitis quidem fugit, eligendi nulla sequi, ipsum obcaecati deserunt esse asperiores ipsam. Adipisci laboriosam vero facilis, nam perferendis tempora dolorum animi error? Voluptatibus laborum aliquam enim hic aut? Odit doloribus culpa adipisci ipsum animi eveniet cum?</motion.p>
                    <motion.button
                    variants={fadeIn('up', 0.6)}
                                    initial = {'hidden'}
                                    whileInView={'show'}
                                    viewport={{once: false}}
                    className='mt-4 lg:mt-8 bg-red-600 text-white font-bold px-4 py-1 rounded text-lg active:bg-red-700'>Learn more</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Abo;