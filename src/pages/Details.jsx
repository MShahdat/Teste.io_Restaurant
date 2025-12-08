import React from 'react';
import BannerCard from '../component/BannerCard';
import DetailsBlog from '../component/Blog/DetailsBlog';
const Details = () => {

  const url = 'https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <BannerCard url = {url} page = {'single blog'}></BannerCard>
      <DetailsBlog></DetailsBlog>
    </div>
  );
};

export default Details;