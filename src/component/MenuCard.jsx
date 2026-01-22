import React from 'react';
import { menu } from '../../public/Menu';
import { Link } from 'react-router-dom';
import { GiHamburger } from "react-icons/gi";
import { PiBowlSteamLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/Motion';


const MenuCard = (props) => {
    // console.log(props.menu)
    const cat = (props.menu[0].category)

    return (
        <div>
            <div className='bg-white/75 rounded h-fit relative transform hover:border hover:border-dashed hover:border-red-400 duration-300 border border-dashed border-red-100'>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h3 className='text-center text-2xl py-4 font-semibold tracking-widest text-black/80 pb-4 uppercase'>{cat}</h3>
                    <div>
                        <div className='absolute left-2 top-2'>
                            <GiHamburger className='size-12 text-black/20' />
                        </div>
                        <div className='absolute right-2 top-2'>
                            <GiSlicedBread className='size-12 text-black/20' />
                        </div>
                    </div>
                </motion.div>


                {/* <div className='absolute bottom-2 left-2'>
                    <PiBowlSteamLight className='size-10 text-black/20'/>
                </div> */}

                {/* <div className='absolute left-2 bottom-2'>
                    <GiFullPizza className='size-10 text-black/20'/>
                </div> */}
                <div
                    className='flex flex-col gap-0'>
                    {
                        props.menu.map((item, idx) => (
                            <motion.div
                                variants={fadeIn('up', 0.2)}
                                initial={'hidden'}
                                whileInView={'show'}
                                viewport={{once: false}}
                                key={idx}>
                                <div className='py-6 flex justify-between items-center px-2 sm:px-6 md:px-4 hover:border-b hover:border-red-400 hover:border-dashed border-b border-red-100 duration-300 border-dashed'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={item.url} className='w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-full'></img>
                                        <div className='flex flex-col gap-1'>
                                            <Link className='text-xl md:text-lg leading-tight font-medium text-black/80 hover:text-red-600 '>{item.name}</Link>
                                            <p className='text-gray-500 text-[16px] md:text-sm'>{item.des}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-xl sm:text-2xl md:text-xl font-bold text-red-600'>${item.price}</p>
                                    </div>
                                </div>


                                {/* <h1 className='border-t border-red-300 border-dashed'></h1> */}
                            </motion.div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default MenuCard;