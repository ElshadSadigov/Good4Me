import React from 'react'

const OurProductsCard = ({data}) => {
  return (
    <div className=''>
      <div className='relative flex justify-center items-center  h-[320px] p-[45px] bg-[#F4F3F4] border-[1px] border-[#E8E8E8]'>
        <span className='absolute right-[11px] top-[11px]'>{data.onSale ? <span className='bg-[#F6623E] px-[9px] py-[5px] text-white uppercase text-[10px]'>On Sale</span> : null}</span>
        <img src={data.img} alt="" className='h-full'/>
      </div>
      <div className='flex flex-col items-center mt-[22px]'>
        <div>
            <span className='text-[14px] font-medium'>{data.title}</span>
        </div>
        <div className='mt-[7px]'>
            <span className='text-[14px] text-[#F6623E]'>${data.newPrice} NZD</span>
            <span className='text-[14px] ms-[20px] line-through text-[#828181]'>${data.price} NZD</span>
        </div>
      </div>
    </div>
  )
}

export default OurProductsCard
