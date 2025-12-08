import React from 'react';
import { menu } from '../../../public/Menu';
import { Link } from 'react-router-dom';
import { GiHamburger } from "react-icons/gi";
import { PiBowlSteamLight } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import MenuCard from '../MenuCard';

const Menu = () => {
    // console.log(menu)

    const breakfast = menu.filter(item => item.category === 'breakfast')
    const lunch = menu.filter(item => item.category === 'lunch')
    const dinner = menu.filter(item => item.category === 'dinner')
    const dessert = menu.filter(item => item.category === 'dessert')
    const wine = menu.filter(item => item.category === 'wine card')
    const drink = menu.filter(item => item.category === 'drink')


    // console.log(breakfast)


    return (
        <div className='bg-white text-black '>
            <div className='max-w-7xl px-4 py-4 mx-auto'>
                <div className='flex flex-col items-center py-8'>
                    <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>Specialitiy</p>
                    <h2 className='-mt-5 text-3xl md:text-4xl font-bold text-black/80'>Our Menu Items</h2>
                </div>
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

export default Menu;