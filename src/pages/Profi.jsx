import React from 'react';
import BannerCard from '../component/BannerCard';
import Profile from '../component/Profile';

const Profi = () => {
  const url = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <BannerCard url = {url} page = 'Profile' ></BannerCard>
      <Profile></Profile>
    </div>
  );
};

export default Profi;