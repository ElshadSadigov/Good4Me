import React from 'react'

const DealCard = (props) => {
    const {id, title, img} = props.data
  return (
    <div key={id} className='flex flex-col items-center '>
        <div className='p-[42px] bg-[#F4F3F4] border-[1px] border-[#E8E8E8]'>
            <img src={img} alt="" />
        </div>
        <span className='text-[15px] mt-[22px] text-center font-medium'>{title}</span>
    </div>
  )
}

export default DealCard
