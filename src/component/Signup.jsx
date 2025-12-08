import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { app } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';


const Singup = () => {

  const [, , , setSignInOpen, , setSignUpOpen, profile, setProfile] = useContext(dataContext);

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email, pass)

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-])[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]{6,}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@((gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|mail|gmx)\.(com|org|net|edu|gov|info)|([a-zA-Z0-9.-]+\.)?(edu|ac)\.bd)$/;

    if (!passwordRegex.test(pass)) {
      toast.error('Password must include uppercase, lowercase, number, and special character');
      return;
    } else if (!emailRegex.test(email)) {
      toast('Invalid email domain')
      return
    }

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, {
          displayName: name,
          photoURL: 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80'
        }).then(() => {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          }
          setProfile(userInfo)
        })
        setSignUpOpen(false);
        setSignInOpen(true);
        toast.success('Sign up seccessfully!')

      }).catch((err) => {
        // Handle Errors here.
        if (err.code === "auth/email-already-in-use") {
          toast.error('This email already exists!')
        } else {
          toast.error('Sing in failed!')
        }

      });

  }

  const auth = getAuth(app);

  return (
    <div
      className='flex items-center justify-center bg-black/20 h-screen fixed inset-0 z-40'>
      <div className='bg-black/10 backdrop-blur-3xl text-center h-88 lg:h-96 w-[300px] sm:w-[400px] lg:w-[500px] rounded shadow-2xl text-black relative'>
        <RxCross2 onClick={() => {
          setSignUpOpen(false)
        }} className='absolute right-2 top-2 text-white size-6' />
        <h1 className='text-xl md:text-2xl tracking-wide pt-8 text-white font-bold uppercase '>Please Sign Up Here!</h1>


        <form onSubmit={handleForm} className='mt-4 md:mt-6 flex flex-col gap-4 items-center'>

          <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} required placeholder='Name' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder='example@gmail.com' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <input type='password' onChange={(e) => { setPass(e.target.value) }} value={pass} required placeholder='Enter your password' className='bg-gray-200 px-3 py-2 rounded w-5/6 lg:w-4/5 outline-none'></input>

          <button type='submit' className='mt-2 bg-red-600 px-2 py-2 rounded w-5/6 lg:w-4/5 text-white font-bold'>Sign Up</button>
        </form>

        <div className='text-white mt-2'>
          <p>Already have an Account? <span onClick={() => {
            setSignInOpen(true)
            setSignUpOpen(false)
          }} className='font-semibold underline cursor-pointer'>Sing In</span></p>
        </div>
      </div>
    </div>
  );
};

export default Singup;