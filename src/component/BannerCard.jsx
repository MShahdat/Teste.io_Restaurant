import { Link } from "react-router-dom";
import Nav from "./Nav";
import { IoIosArrowForward, IoMdSad } from "react-icons/io";
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from "../motion/Motion";


const BannerCard = (props) => {

    return (
        <div className=' text-white'>
            <div className=''>

                <div className='relative'>
                    <div className='absolute left-0 xl:left-30 right-0 xl:right-30 top-4 md:top-10 '>
                        <Nav></Nav>
                    </div>
                    <img src={props.url}
                        className='w-screen h-[280px] md:h-[340px] xl:h-[400px] object-cover'
                    ></img>

                    <motion.div
                    variants={fadeIn('up', 0.2)}
                                          initial="hidden"
                                          whileInView={'show'}
                                          viewport={defaultViewport}
                    className=' text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <h2 className='text-6xl md:text-7xl lg:text-9xl font-bold font-gwendolyn text-center tracking-[2px]'>{props.page}</h2>
                    </motion.div>

                    {/* <button className='bg-red-600 text-white font-medium px-4 py-2 rounded active:bg-red-700'>Go to Menu</button> */}
                    <motion.div
                    variants={fadeIn('up', 0.5)}
                                          initial="hidden"
                                          whileInView={'show'}
                                          viewport={defaultViewport}
                    className="absolute left-1/2 bottom-4 -translate-x-1/2 whitespace-nowrap flex gap-0 bg-black/5 backdrop-blur-xl px-4 py-1 rounded border border-white font-medium text-md md:text-xl">
                        <Link to={'/'} className="flex items-center hover:text-red-600 hover:scale-101 duration-300 transform">
                            <h3>Home</h3>
                            <IoIosArrowForward className="mt-1.5"/>
                        </Link>
                        <div className="">
                            <h3>{props.page}</h3>
                            {/* <IoIosArrowForward className="mt-1.5"/> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;