import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { toast } from 'react-toastify';
import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../motion/Motion';

const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        toast.success('Thans for your support!')
        setEmail('')
    }

    return (
        <div className='bg-black text-white'>
            <div className='max-w-7xl px-4 sm:px-16 md:px-4 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h3 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Teste</h3>
                    <p className='mt-4 lg:mt-8 text-[16px] leading-relaxed text-white/70 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum aperiam labore alias, expedita laborum eum ipsa, sit, ad provident deserunt quos ut!</p>
                    <div className='flex gap-2 mt-4'>
                        <a href='https://x.com/'><FaTwitter className='size-8 rounded-full bg-red-500 px-1.5 py-1.5' /></a>
                        <a href='https://www.facebook.com/'><FaFacebook className='size-8 rounded-full bg-red-500 px-1.5 py-1.5' /></a>
                        <a href='https://www.instagram.com/'><LuInstagram className='size-8 rounded-full bg-red-500 px-1.5 py-1.5' /></a>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h1 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Open Hours</h1>
                    <div className="mt-4 lg:mt-8 grid grid-cols-2 gap-y-1.5 w-[328px] md:w-[300px]">
                        <p className="text-white/95">Monday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Tuesday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Wednesday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Thursday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Friday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Saturday</p>
                        <p className="text-white/70">10:00 AM - 11:00 PM</p>

                        <p className="text-white/95">Sunday</p>
                        <p className="text-red-700 font-medium">Closed</p>
                    </div>


                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Instagram</h2>
                    <div className='mt-4 lg:mt-8 grid grid-cols-3'>
                        <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1642647391072-6a2416f048e5?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <img className='h-24 max-w-full object-cover' src='https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                        <img className='h-24 max-w-full object-cover' src='https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={defaultViewport}
                >
                    <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Newsletter</h2>
                    <p className='mt-4 lg:mt-8 text-white/70 text-[16px] leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum?</p>
                    <form onSubmit={handleSubmit} className='mt-4 lg:mt-4 flex flex-col gap-2'>
                        <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email...' required className='bg-white text-black/70 w-full text-[16px] font-medium px-4 py-2 rounded shadow-2xl outline-none'></input>
                        <button type='submit' className='bg-red-500 text-center py-1.5 font-bold text-[16px] rounded w-full'>Subscribe</button>
                    </form>
                </motion.div>
            </div>
            <motion.div
            variants={fadeIn('up', 0.2)}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={defaultViewport}
            className='py-4 text-white/80 bg-red-500 text-center'>
                Copyright ©2025 All rights reserved. This template is made by Shahdat
            </motion.div>
        </div>
    );
};

export default Footer;