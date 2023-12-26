import React, { useEffect, useState } from 'react'
import amerikaMap from '../svgs/amerika.svg'
import search from '../svgs/search.svg'
import basket from '../svgs/basket.svg'
import Logo from '../imgs/Logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../slice/slice'

const Header = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    useEffect(() => {
        const nav = document.querySelector('.nav')
        if (show === false) {
            nav.style.left = '0'
        } else {
            nav.style.left = '-100%'
        }
    }, [show])
    return (
        <div className='fixed left-0 top-0 w-full z-[999]'>
            <div className='w-full flex justify-between items-center py-[15px] lg:px-[120px] md:px-[60px] px-[30px] bg-[#F6623F] text-white'>
                <div className='md:block hidden'>
                    <span className='lg:text-[16px] text-[14px]'>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
                </div>
                <div className='flex items-center md:justify-start justify-between w-full md:w-auto'>
                    <div>
                        <span><Link to="/login" className='lg:text-[16px] text-[14px]'>Sign In</Link></span>
                        <span className='mx-[5px]'>/</span>
                        <span><Link to="/register" className='lg:text-[16px] text-[14px]'>Register</Link></span>
                    </div>
                    <div className='w-[2px] h-[27px] opacity-30 bg-white mx-[23px]'>
                        {/* Xett */}
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src={amerikaMap} alt="" width={24} height={16} />
                        </div>
                        <div className='flex items-center'>
                            <span className='ms-[7px] me-[3px]'>USD</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                                <path d="M0 0L4 4L7.99997 0H0Z" fill="white" />
                            </svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-[120px] md:px-[60px] px-[30px] py-[28px] flex justify-between items-center bg-[#FFFFFF] border-b-[#E0E0E0] border-b-[1px]'>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Logo" width={198} height={47} />
                    </Link>
                </div>
                <div className='nav flex justify-between'>
                    <ul className='grid md:grid-cols-4 grid-cols-1 gap-y-[55px]'>
                        <li onClick={() => setShow(!show)} className='uppercase md:text-[18px] text-[16px]'>
                            <Link to="/" >Home</Link>
                        </li>
                        <li onClick={() => setShow(!show)} className='uppercase md:text-[18px] text-[18px]'>
                            <Link to="/shop" >Shop</Link>
                        </li>
                        <li onClick={() => setShow(!show)} className='uppercase md:text-[18px] text-[16px]'>
                            <Link to="/faq">Faq's</Link>
                        </li>
                        <li onClick={() => setShow(!show)} className='uppercase md:text-[18px] text-[16px]'>
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                    <div className='flex items-center md:ms-[45px]'>
                        <span>
                            <Link to="/shop" onClick={() => setShow(!show)}>
                                <img src={search} alt="" />
                            </Link>
                        </span>
                        <span className='ms-[15px] relative'>
                            <Link to="/basket" onClick={() => setShow(!show)}>
                                <img src={basket} alt="" />
                                <span className='bg-[#F6623E] text-[#fff] font-medium translate-x-[-50%] translate-y-[-50%]  absolute left-[100%] top-0 text-[14px] rounded-[10px] px-[5px]'>{totalQuantity}</span>
                            </Link>
                        </span>
                    </div>
                </div>
                <div onClick={() => setShow(!show)} className='md:hidden block'>
                    {show ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </div>
            </div>
        </div>
    )
}

export default Header
