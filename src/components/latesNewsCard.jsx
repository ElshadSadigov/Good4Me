import React from 'react'
import { Link } from 'react-router-dom'

const LatesNewsCard = ({data}) => {
  return (
    <div key={data.id}>
      <div className='flex justify-center'>
        <img src={data.img} alt="" />
      </div>
      <div className='flex flex-col items-center mt-[20px]'>
        <span className='text-[12px] font-medium text-[#F6623E]'>{data.date}</span>
        <span className='my-[2px] text-[20px] font-medium text-center'>{data.title}</span>
        <p className='text-center text-[#828181] text-[14px] leading-[30px]'>{data.text}</p>
        <div className='mt-[20px]'>
          <Link to="/" className='py-[12px] px-[24px] text-[16px] font-medium uppercase bg-[#F6623E] text-white'>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default LatesNewsCard
