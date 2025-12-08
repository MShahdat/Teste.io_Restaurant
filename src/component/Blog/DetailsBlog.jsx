
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";
import { IoTime } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { blogs } from '../../../public/Blog';
import Sidebar from './Sidebar';
import { dataContext } from '../../context/Context';
import {toast} from 'react-toastify'


const DetailsBlog = () => {
  const [open, setOpen, , setSignInOpen, , setSignUpOpen] = useContext(dataContext)

  const user = JSON.parse(localStorage.getItem('teste_user'))

  console.log(useParams())
  const { id } = useParams();

  const foundById = blogs.find((b) => String(b.id) === String(id));
  const blog = foundById || blogs[Number(id)];

  console.log(blog.title)


  // useEffect(function () {
  //     blogHandling()
  // }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSub = (e) => {
    e.preventDefault()
    toast.success('Your comment submitted!')
    setName('')
    setEmail('')
    setMsg('')
  }


  const navigate = useNavigate();

  return (
    <div className='max-w-7xl px-4 py-8 mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between gap-2'>
        <div className='w-full py-4 lg:w-8/12 bg-white shadow'>
          <h2 className='px-4 text-xl  sm:text-2xl font-medium text-black/90'>{blog?.title}</h2>
          <p className='leading-relaxed sm:text-[18px] tracking-wide text-black/60 pb-4 px-4 mt-4'>{blog.des}</p>
          <img
            src={blog?.url} className='mt-4 w-full h-80 sm:h-96 md:h-112 py-4 object-cover rounded px-4'>
          </img>

          <div
            className='px-4 mt-4 flex items-center gap-2 font-bold text-gray-800 sm:text-lg'>
            <FcBusinessman />
            <p>{blog?.post} - </p>
            <p>{blog?.date}</p>
          </div>

          <div
            className='leading-relaxed text-black/60 sm:text-[18px] pb-4 px-4 mt-4 tracking-wide'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto perspiciatis facere repudiandae illo quia aperiam doloribus, eos quaerat omnis? Ut tempore nostrum, velit consequuntur voluptates ex id obcaecati omnis?</p><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium non a impedit praesentium cum dolores fuga ipsa aperiam delectus. Dolore, enim cupiditate voluptatibus quo vero harum facilis vitae, necessitatibus voluptate veritatis tempore distinctio, tenetur sit delectus eius? Est dolorum obcaecati minus provident animi quas perferendis fuga vero, ullam numquam ipsum officia sint, autem dolore quaerat et quod, placeat inventore suscipit? Quia, praesentium harum. Quos accusantium quidem distinctio magnam quasi ut laboriosam esse fuga eveniet debitis exercitationem atque enim magni, officiis quae repellendus illo sed, fugit earum explicabo necessitatibus est. Ea quas aliquam earum ad! Ea maxime odio reiciendis ipsum?</p><br></br>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, vitae? Nemo molestias iusto labore repellendus facilis. Reprehenderit cumque quaerat quos sunt id, fugiat deserunt earum illo voluptatum! Ipsa, adipisci necessitatibus.</p><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, velit. Deserunt distinctio ratione enim deleniti voluptatem nam in minus dolore? Minus, alias. Expedita, ratione? Tempora, veritatis aperiam debitis dolore, laboriosam quis magnam odit exercitationem dolorum totam sed ratione consectetur voluptatem?</p>
          </div>
          <div>
            <h2 className='text-xl font-medium px-4 bg-red-500 text-white rounded py-4'>{blog.comment} Comments</h2>

            {
              Array.from({ length: blog.comment }).map((_, idx) => (
                <div key={idx} className='px-4'>
                  <div className='mt-8 flex  gap-4'>
                    <img src='https://plus.unsplash.com/premium_photo-1694557637756-0f1116734887?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-16 w-16 object-cover rounded-full'></img>
                    <div className='mt-0'>
                      <p className='text-lg text-black/80 font-bold'>John Doe</p>
                      <p className='text-[14px] text-red-500 font-semibold mt-0 '>August 3, 2025 at 1:34pm</p>
                      <p className='mt-2 text-[16px] sm:text-[17px] md:text-[18px] text-black/50 leading-relaxed tracking-wide w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quasi explicabo eos debitis sed architecto ipsam illo consequatur</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='mt-16'>
            <h2 className='text-xl font-medium px-4 bg-black/90 text-white rounded py-4'>Write Comment</h2>
            <form onSubmit={handleSub}  className='mt-8 w-full px-2 sm:px-8'>
              <label className='mt-0 block font-semibold text-lg'>Full Name</label>
              <input onChange={(e) => setName(e.target.value)} type='text'  placeholder='Full Name' value={name} required className='mt-1 outline-none text-[17px] bg-gray-100 text-black/80 tracking-wide font-medium rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block font-semibold text-lg'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='example@gmail.com' value={email} required className='mt-1 outline-none text-[17px] bg-gray-100 text-black/80 tracking-wide font-medium rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block font-semibold text-lg'>Message</label>
              <textarea onChange={(e) => setMsg(e.target.value)} type='text' value={msg} rows={3}  placeholder='Write message' required className='mt-1 outline-none text-[17px] bg-gray-100 text-black/80 tracking-wide font-medium rounded px-3 py-2.5 w-full'></textarea>

              {
                user ? (
                  <button type='submit' className='bg-red-600 w-2/9 text-center text-white font-bold text-lg rounded mt-2 py-1'>Submit</button>
                ):(
                  <div onClick={() => {
                    setSignInOpen(true)
                  }} className='bg-red-600 w-2/9 text-center text-white font-bold text-lg rounded mt-2 py-1'>Submit</div>
                )
              }
              
            </form>
          </div>
        </div>

        <div className='mt-8 lg:mt-0 lg:w-4/12'>
          <Sidebar></Sidebar>
        </div>

      </div>


      <div className='flex items-center justify-between px-4 mt-4'>
        <button

          onClick={() => {
            console.log('clicked')
            navigate(-1)
          }} className='flex items-center gap-1 text-red-600 font-bold cursor-pointer'>
          <FaArrowLeft className='mt-1' />
          <p className=''>Go to Prev</p>
        </button>

        <button
          onClick={() => {
            console.log('clicked')
            navigate('/blogs')
          }} className='flex items-center gap-1 px-4 text-red-600 font-bold cursor-pointer'>
          <p className=''>Go to Blogs</p>
          <FaArrowRight className='mt-1' />
        </button>
      </div>
    </div>
  );
};

export default DetailsBlog;