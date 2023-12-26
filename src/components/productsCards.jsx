import React from 'react'
import { addToCart } from '../slice/slice'
import { useDispatch } from 'react-redux'

const ProductsCards = ({data}) => {
  const dispatch = useDispatch()
  return (
    <div key={data.id} className='border-[2px] border-[#828181] rounded-[8px] overflow-hidden'>
      <div className='h-[280px] bg-[#F4F3F4] p-[25px] flex items-center justify-center'>
        <img src={data.img} alt="" className='h-full'/>
      </div>
      <div className='px-[8px] my-[10px] flex flex-col justify-between '>
        <div className='flex justify-center'>
            <span className='text-center text-[15px]'>{data.title}</span>
        </div>
        <div className='flex items-center justify-between mt-[8px] px-[25px]'>
            <div className='flex flex-col'>
                <span className='text-[#F6623E]'>${data.newPrice} NZD</span>
                <span className='text-[13px] line-through text-[#828181]'>${data.price} NZD</span>
            </div>
            <div><button onClick={()=>dispatch(addToCart())} className='bg-[#F6623E] px-[10px] py-[3px] uppercase text-[#fff] font-semibold text-[15px]'>add</button></div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCards
