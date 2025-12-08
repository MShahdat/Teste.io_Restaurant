import React from 'react';
import Chef from '../component/Cheff/Chef';
import BannerCard from '../component/BannerCard';
import Ab from '../component/Home/Ab';

const Chefs = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1661349604444-3c8416308121?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div>
            <BannerCard url = {url} page = {'Chef'}></BannerCard>
            <Chef></Chef>
            <Ab></Ab>
        </div>
    );
};

export default Chefs;