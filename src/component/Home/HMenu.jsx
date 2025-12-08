import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburger } from "react-icons/gi";
import { PiBowlSteamLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { menu } from '../../../public/Menu';
import MenuCard from '../MenuCard';
import {motion} from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';


const HMenu = () => {
    console.log(menu)

    const breakfast = menu.filter(item => item.category === 'breakfast').slice(0, 3)
    const lunch = menu.filter(item => item.category === 'lunch').slice(0, 3)
    const dinner = menu.filter(item => item.category === 'dinner').slice(0, 3)
    const dessert = menu.filter(item => item.category === 'dessert').slice(0, 3)
    const wine = menu.filter(item => item.category === 'wine card').slice(0, 3)
    const drink = menu.filter(item => item.category === 'drink').slice(0, 3)


    console.log(breakfast)


    return (
        <div className='bg-white text-black '>
            <div className='max-w-7xl px-4 py-4 mx-auto'>
                <motion.div
                variants={fadeIn('up', 0.2)}
                                initial = {'hidden'}
                                whileInView={'show'}
                                viewport={defaultViewport}
                className='flex flex-col items-center py-8'>
                    <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>Specialitiy</p>
                    <h2 className='-mt-5 text-3xl md:text-4xl font-bold text-black/80'>Our Menu Items</h2>
                </motion.div>
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6'>
                    <MenuCard menu = {breakfast}></MenuCard>
                    <MenuCard menu = {lunch}></MenuCard>
                    <MenuCard menu = {dinner}></MenuCard>
                    <MenuCard menu = {dessert}></MenuCard>
                    <MenuCard menu = {wine}></MenuCard>
                    <MenuCard menu = {drink}></MenuCard>
                </div>
            </div>
        </div>
    );
};

export default HMenu;