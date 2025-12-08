import React from 'react';
import Menu from '../component/Menu/Menu';
import BannerCard from '../component/BannerCard';
import Reserv from '../component/Rreservation/Reserv';

const Menus = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1679072595330-67c13052bd1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return (
        <div>
            <BannerCard url = {url} page = {'Menu'}></BannerCard>
            <Menu></Menu>
            <Reserv></Reserv>
        </div>
    );
};

export default Menus;