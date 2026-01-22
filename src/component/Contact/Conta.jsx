import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, defaultViewport } from '../../motion/Motion';
import { dataContext } from '../../context/Context';
import { MediaQuery } from '../hook/MediaQuery';

const con = [
  {
    lavel: 'Address',
    value: '198 West 21th Street, Narayanganj, Dhaka-Bangladesh',
  },
  {
    lavel: 'Phone',
    value: '+880185374041',
  },
  {
    lavel: 'Email',
    value: 'mdshahdat2504@gmail.com'
  },
  {
    lavel: 'Website',
    value: 'www.website.com',
  }
]

const Conta = () => {
  const [open, setOpen, , setSignInOpen, , setSignUpOpen] = useContext(dataContext)

  const user = JSON.parse(localStorage.getItem('teste_user'))

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState('')
  const [msg, setMsg] = useState('')

  const formhandle = (e) => {
    e.preventDefault()
    console.log("name", name)
    console.log("email", email)
    console.log("subject", sub)
    console.log("message", msg)

    // alert('Your message has been submitted')
    toast.success('Your message has been submitted')
    setName('')
    setEmail('')
    setSub('')
    setMsg('')

  }

  const isMobile = MediaQuery("(max-width: 768px)");

  return (
    <div className='max-w-7xl px-4 py-8 mx-auto'>
      <div className=''>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-3xl font-bold  text-red-600 pb-4'>Contact Information</motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-white'>
          {
            con.map((item, idx) => (
              <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false }}
                key={idx}
                className='h-40 flex px-4 items-center justify-center w-full rounded bg-red-600'>
                <p className='text-xl text-center'>{item.lavel}: <span className='text-lg'>{item.value}</span></p>
              </motion.div>
            ))
          }
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <motion.div
            variants={isMobile ? fadeIn('up', 0.4) : fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false }}
            className="w-full h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03611072465634!2d90.49947640059956!3d23.69947466809364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1764966094488!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            variants={isMobile ? fadeIn('up', 0.4) : fadeIn('left', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={defaultViewport}
            className='mt-0 bg-white shadow-2xl py-4'>
            <form onSubmit={formhandle} className='w-full px-2 lg:px-4 xl:px-6'>
              <label className='mt-0 block font-semibold text-xl'>Full Name</label>
              <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block font-semibold text-xl'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block font-semibold text-xl'>Subject</label>
              <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Subject' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block font-semibold text-xl'>Message</label>
              <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-1 outline-none text-[17px] bg-gray-100 text-gray-800 font-medium rounded px-3 py-2.5 w-full'></textarea>

              {
                user ? (
                  <button type='submit' className=' bg-red-600 w-full text-center text-white font-bold text-lg px-4 rounded mt-2 py-1.5'>Submit</button>
                ) : (
                  <div onClick={() => {
                    setSignInOpen(true)
                  }} className='bg-red-600 w-full text-center text-white font-bold text-lg px-4 rounded mt-2 py-1.5'>Submit</div>
                )
              }
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Conta;