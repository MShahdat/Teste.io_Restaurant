import React from 'react';
import BannerCard from '../component/BannerCard';
import Abo from '../component/About/Abo';
import Review from '../component/Home/Review';

const About = () => {
    const url = 'https://images.unsplash.com/photo-1489209909448-8926a2640f1f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div>
            <BannerCard url = {url} page = {'About  US'}></BannerCard> 
              <Abo></Abo>
              <Review></Review>     
        </div>
    );
};

export default About;