import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { dataContext } from '../../context/Context';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const Reserv = () => {

  const [, , , setSignInOpen, , setSignUpOpen] = useContext(dataContext)

  const option = ['2 person', '3 person', '4 person', '5+ person'];

  const [selected, setSelected] = useState('1 person')
  const [opend, setOpend] = useState(false);
  const [time, setTime] = useState('')
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);


  const user = JSON.parse(localStorage.getItem('teste_user'))

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
    <div className='bg-red-500 text-white '>
      <div className=' max-w-7xl lg:px-4 mx-auto'>
        <div className='py-4 lg:py-8'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={defaultViewport}
            className='text-xl md:text-3xl lg:text-4xl uppercase font-medium text-center py-4 lg:pb-16'>Book your Table</motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once: false}}
            className='px-4 lg:px-6 xl:px-12 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
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
              type='date' required></input>


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
                {selected}
              </div>
              {opend && (
                <ul
                  className={`absolute left-0 right-0 max-h-40 overflow-auto px-4 py-2 
              border-l border-b border-r bg-white/15 backdrop-blur-3xl text-white border-white 
              rounded-b flex flex-col gap-1 z-30`}
                >
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
                <button type='submit' className={`bg-white mt-2 active:bg-gray-200 text-red-700 font-bold text-center py-3 rounded text-lg `}>Book Your Table</button>
              ) : (
                <div onClick={() => {
                  setSignInOpen(true)
                }} type='submit' className={`bg-white mt-2 active:bg-gray-200 text-red-700 font-bold text-center py-3 rounded text-lg `}>Book Your Table</div>
              )

            }

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Reserv;