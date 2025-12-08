import React, { useContext, useState } from 'react';
import { IoMdTime } from "react-icons/io";
import { motion } from 'framer-motion'
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { dataContext } from '../../context/Context';

const Ab = () => {

    const [open, setOpen, , setSignInOpen, , setSignUpOpen] = useContext(dataContext)

    const option = ['2 person', '3 person', '4 person', '5+ person'];

    const [selected, setSelected] = useState('1 person')
    const [opend, setOpend] = useState(false);
    const [time, setTime] = useState('')
    const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);

    const user = JSON.parse(localStorage.getItem('teste_user'))
    // console.log(user)

    // Generate time slots with 30-minute intervals
    // Min time: 9:00 AM, Max time: 10:00 PM
    const generateTimeSlots = () => {
        const slots = [];
        const minHour = 9;  // 9:00 AM
        const maxHour = 22; // 10:00 PM

        for (let hour = minHour; hour <= maxHour; hour++) {
            for (let min of [0, 30]) {
                const displayHour = hour > 12 ? hour - 12 : hour;
                const period = hour >= 12 ? 'PM' : 'AM';
                const timeStr = `${displayHour}:${min === 0 ? '00' : '30'} ${period}`;
                const timeValue = `${hour.toString().padStart(2, '0')}:${min === 0 ? '00' : '30'}`; // 24-hour format for storage
                slots.push({ display: timeStr, value: timeValue });
            }
        }
        return slots;
    };

    React.useEffect(() => {
        setTimeSlots(generateTimeSlots());
    }, []);


    return (
        <div className='overflow-auto md:overflow-hidden'>
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row gap-0 sm:gap-0 h-[580px]'>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={true}

                    className='lg:w-1/3 w-full text-white bg-red-500 h-full'>
                    <div className='mt-2'>
                        <h2 className='text-xl md:text-2xl uppercase font-medium text-center py-4'>Book your Table</h2>
                        <form className='px-4 lg:px-6 xl:px-12 pb-8 flex flex-col gap-4'>
                            <input
                                className='border rounded-lg px-4 py-2.5 border-white w-full outline-none font-medium text-lg tracking-[1px] placeholder:text-gray-300'
                                type='text' placeholder='Name...' required></input>

                            <input
                                className='border rounded-lg px-4 py-2.5 border-white w-full outline-none font-medium text-lg tracking-[1px] placeholder:text-gray-300'
                                type='email' placeholder='Email...' required></input>

                            <input
                                className='border rounded-lg px-4 py-2.5 border-white w-full outline-none font-medium text-lg tracking-[1px] placeholder:text-gray-300'
                                type='text' placeholder='Phone...' required></input>

                            <input
                                className='border rounded-lg px-4 py-2.5 border-white w-full outline-none font-medium text-lg tracking-[1px] text-gray-100'
                                type='date' placeholder='Date' required></input>

                            {/* time */}
                            <div className='relative'>
                                <div onClick={() => {
                                    setTimeDropdownOpen(!timeDropdownOpen)
                                    setOpend(false)
                                }}
                                    className={`border border-white px-4 py-2.5 font-medium text-lg bg-transparent cursor-pointer select-none text-white ${timeDropdownOpen ? 'rounded-t-lg' : 'rounded-lg '}`}
                                >
                                    {time || 'Select Time...'}
                                </div>
                                {timeDropdownOpen && (
                                    <ul className={`absolute left-0 right-0 top-full mt-1 max-h-40 overflow-auto px-4 py-2 border-l border-b border-r bg-black/5 backdrop-blur-3xl text-white border-white rounded-b flex flex-col gap-1 z-30`}>
                                        {timeSlots.map((slot, idx) => (
                                            <li key={idx}
                                                onClick={() => {
                                                    setTime(slot.display)
                                                    setTimeDropdownOpen(false)
                                                }}
                                                className='cursor-pointer text-[17px] font-medium hover:scale-102 duration-300 transform'
                                            >{slot.display}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>


                            {/* dropdown part */}
                            <div className='relative'>
                                <div onClick={() => {
                                    setOpend(!opend)
                                    setTimeDropdownOpen(false)
                                }}
                                    className={`border border-white px-4 py-2.5 font-medium text-lg bg-transparent cursor-pointer select-none ${opend ? 'rounded-t-lg' : 'rounded-lg '}`}
                                >
                                    {
                                        selected
                                    }
                                </div>
                                {opend && (
                                    <ul className={`max-h-40 overflow-auto px-4 py-2 border-l border-b border-r bg-white/30 text-white backdrop-blur-2xl border-white rounded-b flex flex-col gap-1 ${opend ? '' : ''}`}>
                                        {option.map((op, idx) => (
                                            <li key={idx}
                                                onClick={() => {
                                                    setSelected(op)
                                                    setOpend(false)
                                                }}
                                                className='cursor-pointer text-[17px] font-medium hover:scale-102 duration-300 transform'
                                            >{op}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {
                                user ? (
                                    <button className={`bg-white mt-2 active:bg-gray-200 text-red-700 font-bold text-center py-3 rounded text-lg ${opend ? 'hidden' : 'block'}`}>Book Your Table</button>
                                ) : (
                                    <div onClick={() => {
                                        setSignInOpen(true)
                                    }} className={`bg-white mt-2 active:bg-gray-200 text-red-700 font-bold text-center py-3 rounded text-lg ${opend ? 'hidden' : 'block'}`}>Book Your Table</div>
                                )
                            }
                        </form>
                    </div>
                </motion.div>
                <div className='relative w-full lg:w-2/3 bg-black h-full'>
                    <img src='https://plus.unsplash.com/premium_photo-1661344424663-61d873ad5647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='object-cover h-[580px] w-full'></img>

                    <div className='absolute left-0 sm:left-2 md:left-2 xl:left-8 top-2 sm:top-4 md:top-8 right-4 lg:right-[40%]'>
                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial={'hidden'}
                            whileInView={'show'}
                            viewport={defaultViewport}
                        >
                            <p className='text-4xl lg:text-5xl font-medium font-gwendolyn text-red-600'>About</p>
                            <h2 className='-mt-6 text-2xl sm:text-3xl lg:text-5xl font-bold text-black  px-4 sm:px-2 '>Welcome to <br></br><span className='text-red-600'>Teste</span>.it</h2>
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.4)}
                            initial={'hidden'}
                            whileInView={'show'}
                            viewport={defaultViewport}
                            className='sm:mt-2 lg:mt-8 md:leading-relaxed lg:tracking-wide rounded text-gray-500 px-4 sm:px-2 py-2 lg:py-4 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora, dolores voluptate hic iure molestiae deserunt a ratione nihil distinctio officia rerum. Nam possimus fugiat, necessitatibus ducimus reprehenderit natus ad totam qui, omnis libero eaque optio perspiciatis, debitis ullam quisquam aut exercitationem quibusdam ipsam consequatur explicabo architecto aspernatur soluta maxime. Ex cumque delectus repellat impedit enim quaerat earum voluptatum vitae? Officia delectus enim, nam soluta placeat asperiores ad deserunt explicabo.</motion.p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ab;