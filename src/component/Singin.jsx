import React, { useContext, useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { toast } from 'react-toastify';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";

import { app } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Singin = () => {

  const [, , , setSignInOpen, , setSignUpOpen, profile, setProfile] = useContext(dataContext);

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const providerFb = new FacebookAuthProvider();
  providerFb.addScope('public_profile');
  providerFb.addScope('email');

  const handleForm = (e) => {
    e.preventDefault();
    console.log(email, pass);
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user
        console.log(user)
        toast.success('Sign in successfully!')
        setSignInOpen(false)
        localStorage.setItem('teste_user', JSON.stringify(profile))
        window.dispatchEvent(new Event('storage'));
        navigate('/')
      }).catch((err) => {
        console.log(err.code)
        toast.error('Invalid email password!')
      })
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }

        toast.success('Sign in successfully!')
        setSignInOpen(false)
        localStorage.setItem('teste_user', JSON.stringify(userInfo))
        window.dispatchEvent(new Event('storage'))
        navigate('/')
      })
      .catch((error) => {
        toast.error('Login failed')
        console.log(error.message);
      });
  };

  const handleFb = () => {
    signInWithPopup(auth, providerFb)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        setSignInOpen(false)

        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }
        toast.success('Sign in successfully!')
        localStorage.setItem('teste_user', JSON.stringify(userInfo))
        window.dispatchEvent(new Event('storage'));
        navigate('/')
      })
      .catch((err) => {
        // Handle Errors here.
        if (err.code === "auth/account-exists-with-different-credential") {
          toast.error('This email already exists with Google!');
        } else {
          toast.error('Sing in failed!');
        }

      });

  }

  return (
    <div

      className='flex items-center justify-center bg-black/20 h-screen fixed inset-0 z-40'>
      <div className='bg-black/10 backdrop-blur-3xl text-center h-96 lg:h-96 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>
        <RxCross2 onClick={() => {
          setSignInOpen(false)
        }} className='absolute right-2 top-2 text-white size-6' />
        <h1 className='text-xl md:text-2xl pt-8 tracking-wide text-white font-bold uppercase '>Please Sign In Here!</h1>


        <form onSubmit={handleForm} className='mt-4 md:mt-8 flex flex-col gap-4 items-center'>

          <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder='example@gmail.com' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <input type='password' onChange={(e) => { setPass(e.target.value) }} value={pass} required placeholder='Enter your password' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <button type='submit' className='mt-2 bg-red-600 px-2 py-2 rounded w-5/6 lg:w-4/5 text-white font-bold'>Sign In</button>
        </form>
        <div className='mt-4 px-16'>
          <p className='text-white'>Or Sign in by,</p>
          <div className='flex gap-6 items-center justify-center mt-2'>
            <div onClick={() => {
              handleGoogle()
            }} className='cursor-pointer'>
              <FcGoogle className='size-9' />
            </div>
            <div onClick={() => {
              handleFb()
            }} className='cursor-pointer'>
              <FaFacebook className='size-8 text-blue-600' />
            </div>
          </div>
        </div>
        <div className='text-white mt-2'>
          <p>New User? <span onClick={() => {
            setSignUpOpen(true)
            setSignInOpen(false)
          }} className='font-semibold underline cursor-pointer'>Sing Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Singin;