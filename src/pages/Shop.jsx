import React, { useState } from 'react'
// import productsData from '../data/productsData'
// import ProductsCards from '../components/productsCards';
import { addToCart } from '../slice/slice';
import { useSelector, useDispatch } from 'react-redux';


const Shop = () => {
  const items = useSelector((state) => state.allCart.items)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  return (
    <div className='pt-[200px] lg:px-[100px] md:px-[60px] px-[30px] mx-auto flex flex-col items-center'>
      <div className=' p-[15px] flex justify-center'>
        <input type="text" onChange={(e) => setSearch(e.target.value)} className='md:w-[20rem] w-[15rem] me-[7px] h-[40px] rounded-[20px] focus:border-[#F6623E] outline-none border-[2px] border-[#828181] px-[15px] text-[14px]' placeholder='Enter The Desired Product' />
      </div>
      <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[25px] gap-y-[45px] my-[55px]'>

        {
          items.filter((item) => {
            if (search === "") {
              return item
            } else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
              return item
            }
          }).map((item) => {
            return (
              <div key={item.id} className='border-[2px] border-[#828181] rounded-[8px] overflow-hidden'>
              <div className='h-[280px] bg-[#F4F3F4] p-[25px] flex items-center justify-center'>
                <img src={item.img} alt="" className='h-full'/>
              </div>
              <div className='px-[8px] my-[10px] flex flex-col justify-between '>
                <div className='flex justify-center'>
                    <span className='text-center text-[15px]'>{item.title}</span>
                </div>
                <div className='flex items-center justify-between mt-[8px] px-[25px]'>
                    <div className='flex flex-col'>
                        <span className='text-[#F6623E]'>${item.newPrice} NZD</span>
                        <span className='text-[13px] line-through text-[#828181]'>${item.price} NZD</span>
                    </div>
                    <div><button onClick={()=>dispatch(addToCart(item))} className='bg-[#F6623E] px-[10px] py-[3px] uppercase text-[#fff] font-semibold text-[15px]'>add</button></div>
                </div>
              </div>
            </div>
            )
          })
        }



      </div>
    </div>
  )
}

export default Shop
