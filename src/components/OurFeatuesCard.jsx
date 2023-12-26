import React from 'react'

const OurFeatuesCard = (props) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='relative bg-blac'>
            <img src={props.svgs} alt="" />
            <img src={props.svgsPoint} alt="" className='absolute right-[-12px] bottom-[-6px] z-[-1]'/>
        </div>
      <span className='mt-[20px] mb-[12px] text-[20px] font-medium'>{props.title}</span>
      <p className='text-center text-[14px] text-[#828181]'>{props.text}</p>
    </div>
  )
}

export default OurFeatuesCard
