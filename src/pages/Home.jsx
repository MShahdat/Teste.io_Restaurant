import React from 'react';
import Banner from '../component/Home/Banner';
import Ab from '../component/Home/Ab';
import HMenu from '../component/Home/HMenu';
import Chef from '../component/Cheff/Chef';
import Abo from '../component/About/Abo';
import Blog from '../component/Blog/Blog';
import { blogs } from '../../public/Blog';
import Review from '../component/Home/Review';

const Home = () => {
    const blog = blogs.slice(0, 6)
    console.log(blog)
    return (
        <div>
            <Banner></Banner>
            <Ab></Ab>
            <HMenu></HMenu>
            <Chef></Chef>
            <Abo></Abo>
            <Review></Review>
            <Blog blog = {blog}></Blog>
        </div>
    );
};

export default Home;