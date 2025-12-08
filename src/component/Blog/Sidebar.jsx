import React from 'react';
import { menu } from '../../../public/Menu';
import { Link } from 'react-router-dom';
import { blogs } from '../../../public/Blog';

const Sidebar = () => {

  const categories = [...new Set(menu.map(item => item.category))];
  console.log(categories[0])

  const categoryCount = menu.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const pBlog = blogs.slice(2, 6);
  console.log(pBlog)

  return (
    <div className=''>
      <div className='bg-red-500 pt-4 pb-8'>
        <h2 className='text-xl font-bold tracking-wide text-white px-4 '>Menu Category</h2>
        {
          categories.map((item) => (
            <div key={item} className='px-4'>
              <div className='px-4 text-lg text-white py-2.5 flex items-center justify-between'>
                <Link to={'/menu'} className='hover:underline'>{item}</Link>
                <p>({categoryCount[item]})</p>
              </div>
              <h3 className='border-t border-dashed border-white'></h3>
            </div>
          ))
        }
      </div>

      <div className='mt-8'>
        <h2 className='text-xl font-medium px-4 bg-black/90 text-white py-2 tracking-wide'>Popular Blogs</h2>
        <div className='px-0 flex flex-col gap-4 mt-4'>
          {
            pBlog.map((item, idx) => (
              <div key={idx} className='px-2 py-1 flex items-center gap-2 bg-white shadow'>
                <img src={item.url} className='h-20 w-24 object-cover rounded'></img>
                <div className=''>
                  <p className='text-[17px] text-black/80 tracking-wide line-clamp-1 font-medium leading-tight'>{item.title}</p>
                  <p className='text-black/60 text-sm mt-1'>{item.date}</p>
                  <Link to={`/blogs/${item.id}`} className=' text-red-600 font-semibold'>Read more</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;