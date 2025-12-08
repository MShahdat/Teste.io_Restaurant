import React from 'react';
import BannerCard from '../component/BannerCard';
import Reserv from '../component/Rreservation/Reserv';
import Abo from '../component/About/Abo';

const Reservation = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1670984940779-3e7440b20356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return (
        <div>
            <BannerCard url = {url} page = {'Reservation'}></BannerCard>     
            <Reserv></Reserv>
            <Abo></Abo>   
        </div>
    );
};

export default Reservation;