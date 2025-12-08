import React from 'react';
import BannerCard from '../component/BannerCard';
import Blog from '../component/Blog/Blog';
import { blogs } from '../../public/Blog';


const Blogs = () => {
    const url = 'https://plus.unsplash.com/premium_photo-1733342490269-4eb4d00be07e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';



    return (
        <div>
            <BannerCard url = {url} page = {'Blogs'}></BannerCard>
            <Blog blog = {blogs}></Blog>
        </div>
    );
};

export default Blogs;