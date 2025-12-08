import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaMeta } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebase/Firebase';
import { toast } from 'react-toastify';

const Nav = () => {

    const [open, setOpen, , setSignInOpen, , setSignUpOpen] = useContext(dataContext)
    const [token, setToken] = useState(localStorage.getItem('teste_user'));
    const navigate = useNavigate()

    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShow(false);
            } else {
                setShow(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const navitem = [
        { path: '/', link: 'Home' },
        { path: '/menu', link: 'Menu' },
        token && { path: '/reservation', link: "Reservation" },
        { path: '/chef', link: 'Chef' },
        { path: '/blogs', link: 'Blogs' },
        { path: '/about', link: 'About' },
        { path: '/contact', link: 'Contact' },
    ].filter(Boolean)

    //handle logout part
    const auth = getAuth(app);
    const logOut = () => {
        console.log('log out clicked')
        signOut(auth).then(() => {
            localStorage.removeItem('teste_user')
            setToken(null)
            navigate('/')
            toast.success('Sign out successfully!')
            window.dispatchEvent(new Event('storage'))
            setOpen(!open)
        }).catch((error) => {

        });
    }

    useEffect(() => {
        const syncToken = () => {
            setToken(localStorage.getItem('teste_user'))
        }
        window.addEventListener('storage', syncToken);
        return () => window.removeEventListener('storage', syncToken);
    }, [])

    return (
        <div
            className={`bg-black/5 backdrop-blur-[3px] text-white sticky transition-all duration-500 left-0 top-0 z-50 ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <nav
                className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-2xl sm:text-2xl lg:text-3xl font-bold uppercase'>Teste<span className='text-red-700'>.it</span></Link>
                <div className='flex items-center gap-4 lg:gap-6'>
                    {navitem.map((item, idx) => {
                        return (
                            <NavLink key={idx} to={item.path} className={({ isActive }) => `hidden md:block text-[14px] font-semibold uppercase tracking-[1px] ${isActive ? 'text-red-700 font-bold underline' : ''}`}>{item.link}</NavLink>
                        )
                    })

                    }
                </div>
                <div className=''>
                    <div className='flex items-end md:items-center gap-4'>
                        {
                            token &&
                            <Link to={'/profile'}>
                            <img src={JSON.parse(token).photo} className=' h-8 w-8 object-cover rounded-full'></img>
                            </Link>
                        }
                        {
                            !token ? (
                                <div onClick={() => {
                                    setSignInOpen(true)
                                    setOpen(!open)
                                }} className='px-3 py-1 bg-red-600 font-semibold rounded hidden md:block hover:bg-white hover:text-red-700'>
                                    <button>Sign in</button>
                                </div>
                            ) : (
                                <div onClick={() => {
                                    logOut()
                                }} className='px-3 py-1 bg-red-600 font-semibold rounded hidden md:block hover:bg-white hover:text-red-700'>
                                    <button>Log out </button>
                                </div>
                            )
                        }
                        <div onClick={() => {
                            console.log('clicked')
                            setOpen(!open)
                        }} className='block md:hidden '>
                            {open ? <RxCross2 className='size-6' /> : <IoMdMenu className='size-6' />}
                        </div>
                    </div>
                </div>

            </nav>

            {/* for mobile */}

            <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
                <div className='flex flex-col gap-2 px-4 sm:px-8 mt-0 pt-2 pb-4 bg-red-700  text-gray-100'>
                    {
                        navitem.map((item, idx) => {
                            return (
                                <Link key={idx} to={item.path} onClick={() => setOpen(false)} className='text-lg hover:scale-102 duration-500 transform font-semibold'>{item.link}</Link>
                            )
                        })
                    }
                    {
                        !token ? (
                            <div onClick={() => {
                                setOpen(!open),
                                    setSignInOpen(true)
                            }} className='text-center text-lg py-1.5 bg-white text-black font-semibold rounded w-full'>
                                <button>Sign in</button>
                            </div>
                        ) : (
                            <div onClick={() => {
                                logOut()
                            }} className='text-center text-lg py-1.5 bg-white text-black font-semibold rounded w-full'>
                                <button>Log out</button>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Nav;