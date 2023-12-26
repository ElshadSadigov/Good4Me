import React from 'react'
import waveTop from '../imgs/wave-top.png'
import Logo from '../imgs/Logo.png'
import pay from '../imgs/pay.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='bg-[#FFF8F6] w-full'>
            <div className=' w-full'>
                <img src={waveTop} alt="" />
            </div>
            <div className='lg:px-[100px] md:px-[60px] px-[30px] pt-[60px] pb-[30px] grid md:grid-cols-3 grid-cols-1 gap-[50px] w-full'>
                <div className=' flex flex-col items-center'>
                    <span className=''>
                        <img src={Logo} alt="" width={138} height={33}/>
                    </span>
                    <p className='text-center lg:text-[16px] text-[14px] mt-[10px]'>Good health is important, so all of our products have been carefully designed to bring out the best in you.</p>
                </div>
                <div className=''>
                    <div className='flex flex-col items-center'>
                        <span className='lg:text-[26px] text-[23px] font-medium'>Keep In Touch</span>
                        <p className='text-center mt-[11px] text-[#454545] lg:text-[16px] text-[14px]'>Subscribe to receive new product updates, be the first to know about sales, and more.</p>
                    </div>
                    <div className='flex justify-between mt-[30px] py-[13px] border-[#000] border-b-[2px]'>
                        <input type="email" placeholder='Enter your email address' className='w-9/12 bg-[#FFF8F6] outline-none placeholder:text-[#000] lg:placeholder:text-[16px] placeholder:text-[14px]' />
                        <button className='font-semibold uppercase lg:text-[16px] text-[14px] text-[#F6623E]'>Subscribe</button>
                    </div>
                </div>
                <div className='flex md:justify-end justify-center'>
                    <div>
                        <span className='lg:text-[20px] text-[18px] font-medium'>MORE INFO</span>
                        <ul className='mt-[13px] text-[#454545] lg:text-[16px] text-[14px]'>
                            <li><Link to="/">Shipping & Delivery</Link></li>
                            <li className='my-[5px]'><Link to="/">Refund Policy</Link></li>
                            <li><Link to="/">Partner Program</Link></li>
                            <li className='my-[5px]'><Link to="/">Wholesale Portal</Link></li>
                            <li><Link to="/">You Buy, We Donate</Link></li>
                            <li className='my-[5px]'><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-y-[35px]  mx-[100px] py-[22px] border-t-[2px] border-t-[#828181] border-opacity-20'>
                <div className='w-full flex justify-center'>
                    <Link to="https://www.facebook.com/" target='_blank' >
                        <FontAwesomeIcon icon={faFacebook} className='text-[22px] text-[#828181] hover:text-[#F6623E] transition-all' />
                    </Link>
                    <Link to="https://www.instagram.com/" target='_blank' className='mx-[20px]'>
                        <FontAwesomeIcon icon={faInstagram} className='text-[22px] text-[#828181] hover:text-[#F6623E] transition-all' />
                    </Link>
                    <Link to="https://www.twitter.com/" target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} className='text-[22px] text-[#828181] hover:text-[#F6623E] transition-all' />
                    </Link>
                    <Link to="https://www.pinterest.com/" target='_blank' className='mx-[20px]'>
                        <FontAwesomeIcon icon={faPinterest} className='text-[22px] text-[#828181] hover:text-[#F6623E] transition-all' />
                    </Link>
                    <Link to="https://www.youtube.com/" target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} className='text-[22px] text-[#828181] hover:text-[#F6623E] transition-all' />
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <span className='lg:text-[16px] text-[14px] text-center'>© 2021, <Link to='/' className='text-[#F6623E]'>GOOD4ME</Link>. Powered by Shopify</span>
                </div>
                <div className='flex md:justify-end justify-center'>
                    <img src={pay} alt="" width={260} height={24} />

                </div>
            </div>
        </div>
    )
}

export default Footer
