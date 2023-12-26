import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
    return (
        <div className='mt-[200px] mb-[100px] flex justify-center md:px-[100px] px-[30px]'>
            <div className='bg-[#FEF0E7] w-[400px] pt-[48px] px-[40px] relative rounded-[15px]'>
                <div className='w-full flex justify-end absolute right-[24px] top-[24px]'>
                    <Link to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#787A80" />
                        </svg>
                    </Link>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <span className='text-[28px] font-semibold'>Sign Up</span>
                    <p className='text-center my-[24px] text-[14px] text-[#828181]'>Registration takes less than a minute but gives you full control over your orders.</p>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <label htmlFor="fullName" className='text-[14px]'>Full Name</label>
                        <input type="text" id='fullName' placeholder='Your working email' className='mt-[8px] px-[16px] py-[11px] outline-none rounded-[8px]'/>
                    </div>
                    <div className='flex flex-col my-[20px]'>
                        <label htmlFor="email" className='text-[14px]'>Email</label>
                        <input type="email" id='email' placeholder='Your working email' className='mt-[8px] px-[16px] py-[11px] outline-none rounded-[8px]'/>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="password" className='text-[14px]'>Password</label>
                        <input type="password" id='password' placeholder='********' className='mt-[8px] px-[16px] py-[11px] outline-none rounded-[8px]'/>
                    </div>
                    <div className='flex flex-col my-[20px]'>
                        <label htmlFor="confirmPassword" className='text-[14px]'>Confirm Password</label>
                        <input type="password" id='confirmPassword' placeholder='********' className='mt-[8px] px-[16px] py-[11px] outline-none rounded-[8px]'/>
                    </div>
                    <div>
                        <div>
                            <div className='flex items-center'>
                                <input type="checkbox" id='checkbox' className='w-[16px] h-[16px] '/>
                                <label htmlFor="checkbox" className='text-[14px] ms-[10px]'>Remember me</label>
                            </div>
                        </div>
                        <div className='flex my-[24px]'>
                            <button className='w-full bg-[#F6623E] py-[10px] rounded-[8px] text-[#fff] uppercase font-medium'>Sign Up</button>
                        </div>
                        <div className='pb-[8px] border-b-[1px] border-[#828181]'>
                            <span className='text-[14px]'>Already have an account? <Link to='/login' className='font-medium text-[#F6623E]'>Sign In</Link></span>
                        </div>
                    </div>
                </div>
                <div className='my-[24px] flex flex-col items-center'>
                    <div>
                        <span className='text-[16px] text-[#828181]'>Or sign in with</span>
                    </div>
                    <div className='mt-[16px] grid grid-cols-4 gap-x-[12px]'>
                        <Link to='https://www.facebook.com/' target='_blank' className='py-[6px] px-[10px] bg-[#F6623E] flex justify-center items-center rounded-[5px]'>
                            <FontAwesomeIcon icon={faFacebookF} className='text-[#FFF]'/>
                        </Link>
                        <Link to='https://www.google.com/' target='_blank' className='p-[8px] bg-[#F6623E] text-center flex items-center justify-center rounded-[5px]'>
                            <FontAwesomeIcon icon={faGoogle} className='text-[#FFF]'/>
                        </Link>
                        <Link to='https://www.twitter.com/' target='_blank' className='p-[8px] bg-[#F6623E] text-center flex justify-center items-center rounded-[5px]'>
                            <FontAwesomeIcon icon={faTwitter} className='text-[#FFF]'/>
                        </Link>
                        <Link to='https://www.linkedin.com/' target='_blank' className='p-[8px] bg-[#F6623E] text-center flex justify-center items-center rounded-[5px]'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-[#FFF]'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register