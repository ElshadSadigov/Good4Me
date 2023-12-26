import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='pt-[200px] md:w-[900px] w-full lg:px-[120px] md:px-[60px] px-[30px] mx-auto '>
      <div>
        <div>
            <p className='text-[20px] font-medium'>If you have any questions, concerns or comments, we would love to hear from you! Submit your query using any of the methods below:</p>
        </div>
        <div className='mt-[30px]'>
            <div className='flex items-center'><FontAwesomeIcon icon={faPhone} className='text-[#F6623E] text-[20px]'/><Link to="tel:+994506609694" className='mx-[10px] font-light'>(+994)-50-660-96-94</Link></div>
            <div className='flex items-center mt-[5px]'><FontAwesomeIcon icon={faEnvelope} className='text-[#F6623E] text-[20px]'/><Link to="mailto:sv.elshad@gmail.com" className='mx-[10px] font-light'>sv.elshad@gmail.com</Link></div>
        </div>
      </div>
      <div className='mt-[45px]'>
        <div>
            <span className='text-[20px] font-medium'>Or get in touch with us by completing the below form:</span>
        </div>
        <div className='my-[30px] w-full'>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[24px]'>
                <div className='flex flex-col'>
                    <label htmlFor="">Full Name*</label>
                    <input type="text" className='py-[13px] px-[16px] outline-none mt-[10px] border-[2px] border-[#828181] focus:border-[#F6623E] focus:border-[2px] rounded-[8px]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Email*</label>
                    <input type="email" className='px-[16px] py-[13px] outline-none mt-[10px] border-[2px] border-[#828181] focus:border-[#F6623E] focus:border-[2px] rounded-[8px]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Phone</label>
                    <input type="tel" className='px-[16px] py-[13px] outline-none mt-[10px] border-[2px] border-[#828181] focus:border-[#F6623E] focus:border-[2px] rounded-[8px]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Subject</label>
                    <input type="text" className='px-[16px] py-[13px] outline-none mt-[10px] border-[2px] border-[#828181] focus:border-[#F6623E] focus:border-[2px] rounded-[8px]'/>
                </div>
            </div>
            <div className='flex flex-col mt-[24px]'>
                <label htmlFor="">Message*</label>
                <textarea name="" id="" cols="30" rows="5" className='px-[16px] py-[13px] outline-none mt-[10px] border-[2px] border-[#828181] focus:border-[#F6623E] focus:border-[2px] rounded-[8px]'></textarea>
            </div>
        </div>
        <div className='flex md:justify-start justify-center'>
            <button className='bg-[#F6623E] mt-[15px] px-[35px] py-[13px] uppercase font-medium text-[#fff]'>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
