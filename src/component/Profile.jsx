import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../motion/Motion';
import { MediaQuery } from './hook/MediaQuery';


const reserve = [
  {
    date: "1 April, 2025",
    menu: ["Fries burgeraf", "Coke"],
    price: 18,
    status: "Delivered"
  },
  {
    date: "4 April, 2025",
    menu: ["Burger", "Fries", "Coke"],
    price: 18,
    status: "Delivered"
  },
  {
    date: "2 May, 2025",
    menu: ["Burger", "Coke"],
    price: 18,
    status: "Delivered"
  },
  {
    date: "12 Dec, 2025",
    menu: ["Pizza", "Garlic Bread"],
    price: 22,
    status: "Pending"
  },
];


const Profile = () => {

  const user = JSON.parse(localStorage.getItem('teste_user'))
  console.log(user)

  const isMobile = MediaQuery('(max-width: 640px)');


  return (
    <div className='flex flex-col md:flex-row max-w-7xl mx-auto'>
      <motion.div
        variants={isMobile ? fadeIn('up', 0.2): fadeIn('right', 0.4)}
        initial = {'hidden'}
        whileInView={'show'}
        viewport={{once: false}}
        className='text-black w-full md:w-1/2 lg:w-2/5 bg-white shadow-2xl py-8'>
        <div className='flex flex-col items-center justify-center'>
          <img src={user?.photo || 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'} className='w-24 h-24 object-cover rounded-full'></img>
          <h2 className='text-xl font-medium tracking-wider'>{user.name}</h2>
        </div>

        {/* <h3 className='border-t border w-2/3 mt-2 mx-auto border-black/30'></h3> */}
        <div className="sm:px-8 md:px-2 overflow-hidden">
          <table className="mt-4 lg:mt-6 border-t w-full border-b border-black/50">
            <tbody>
              <tr className="border-b border-black/50">
                <td className="px-4 text-[16px] py-2 font-medium">Email</td>
                <td className="px-4 py-2 tracking-wide">{user.email}</td>
              </tr>

              <tr className="border-b border-black/50">
                <td className="px-4 text-[16px] py-2 font-medium">Number</td>
                <td className="px-4 py-2 tracking-wide">{user?.phone || 'N/A'}</td>
              </tr>

              <tr className="border-b border-black/50">
                <td className="px-4 text-[16px] py-2 font-medium">Address</td>
                <td className="px-4 py-2 tracking-wide">{user?.add || 'Dhaka Bangladesh'}</td>
              </tr>

              <tr>
                <td className="px-4 text-[16px] py-2 font-medium">Country</td>
                <td className="px-4 py-2 tracking-wide">{user?.country || 'Bangladesh'}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </motion.div>

      <motion.div
      variants={isMobile ? fadeIn('up', 0.2) : fadeIn('left', 0.4)}
        initial = {'hidden'}
        whileInView={'show'}
        viewport={{once: false}}
      className='w-full md:w-1/2 lg:w-3/5 bg-red-500 text-white'>
        <div className='py-5'>
          <h2 className='text-2xl text-center font-bold tracking-wider mt-0 pb-4'>Reservaion History</h2>

          <table className="w-full border border-red-400 mt-4">
            <thead className="font-medium text-lg">
              <tr className='text-left'>
                <th className="pl-4 py-2">Date</th>
                <th className="pl-4 py-2">Menu</th>
                <th className="pl-4 py-2">Price</th>
                <th className="pl-4 py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {reserve.map((order, i) => (
                <tr key={i} className={`border-t text-[16px] tracking-wide border-red-400`}>
                  <td className="px-4 py-2 font-medium text-[15px] ">{order.date}</td>

                  <td className=" py-2">
                    <ul className="list-disc ml-4">
                      {order.menu.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </td>

                  <td className="px-4 py-2">${order.price}</td>
                  <td className="px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </motion.div>
    </div>
  );
};

export default Profile;