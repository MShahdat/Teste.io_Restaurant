import React from 'react';
import BannerCard from '../component/BannerCard';
import Conta from '../component/Contact/Conta';

const Contact = () => {
    const url = 'https://images.unsplash.com/photo-1558959357-685f9c7ace7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div>
            <BannerCard url = {url} page = {'Contact US'}></BannerCard>
            <Conta></Conta>
        </div>
    );
};

export default Contact;