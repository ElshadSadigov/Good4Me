import React from 'react'
import bankCard from '../imgs/bank-card.png'
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../slice/slice'
import { useSelector, useDispatch } from 'react-redux'

const Basket = () => {
  const dispatch = useDispatch()
  const { cart, totalPrice } = useSelector((state) => state.allCart)
  return (
    <div className='pt-[200px] lg:px-[100px] md:px-[60px] px-[30px]'>
      <div className='flex md:flex-row flex-col'>
        <div className='md:w-3/4  max-h-[500px] overflow-y-auto'>
          <span>Basket</span>
          <div>
            {cart.map((data) => (
              <div key={data.id} className='my-[5px] py-[20px] px-[24px] bg-[#FFF8F6] flex md:flex-row flex-col justify-between '>
                <div className='flex '>
                  <div className='w-[90px] h-[100px] bg-[#cec7c7] p-[10px] rounded-[8px]'>
                    <img src={data.img} alt="" className='w-full h-full' />
                  </div>
                  <span className='mx-[20px] mt-[4px] w-[70%]'>{data.title}</span>
                </div>
                <div className='flex md:items-start items-center md:mt-0 mt-[15px]'>
                  <div className='md:mx-[40px] flex flex-col items-center '>
                    <span className='font-medium text-[18px]'>{data.newPrice}</span>
                    <div className='flex items-center mt-[30px]'>
                      <button disabled={data.quantity === 1}  onClick={() => dispatch(decreaseItemQuantity(data.id))} className='font-extrabold text-[20px] px-[11px] pb-[3px] rounded-[5px] bg-[#F6623E] text-[#fff]'>-</button>
                      <span className='w-[50px] font-medium text-center'>{data.quantity}</span>
                      <button onClick={() => dispatch(increaseItemQuantity(data.id))} className='font-extrabold text-[20px] px-[8px] pb-[3px] rounded-[5px] bg-[#F6623E] text-[#fff]'>+</button>
                    </div>
                  </div>
                  <div className='md:ms-0 ms-[40px]'>
                    <button onClick={() => dispatch(removeItem(data.id))} className='py-[8px] px-[16px] bg-[#F6623E] font-medium text-[#fff]'>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-1/4 md:ms-[50px] md:mt-0 mt-[30px]'>
          <div className='w-full'>
            <span>Apply a promo code</span>
            <div className='h-[40px] w-full bg-red-200 flex mt-[8px]'>
              <input type="text" placeholder='Enter promo code' className='py-[13px] px-[16px] outline-none border-[1px] border-[#828181] text-[15px w-3/4' />
              <button className='h-full w-1/4  text-[#fff] bg-[#F6623E]'>Apply</button>
            </div>
          </div>
          <div className='my-[24px] w-full py-[24px]'>
            <div className='pb-[20px] border-b-[1px] border-[#828181]'>
              <span className='text-[22px] font-medium'>Order totals</span>
            </div>
            <div className='py-[16px] border-b-[1px] border-[#828181]'>
              <div className='flex justify-between'>
                <span className='font-medium'>Subtotal:</span>
                <span className='font-medium'>${totalPrice}</span>
              </div>
              <div className='flex justify-between my-[7px]'>
                <span>Discount:</span>
                <span>-</span>
              </div>
              <div className='flex justify-between'>
                <span>Shopping costs:</span>
                <span>${((totalPrice * 5) / 100).toFixed(2)}</span>
              </div>
            </div>
            <div className='flex justify-between mt-[20px]'>
              <span className='font-medium'>Order total:</span>
              <span className='font-medium'>${(Number(totalPrice) + ((Number(totalPrice) * 5) / 100)).toFixed(2)}</span>
            </div>
            <div>
              {/* 3-cu */}
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-3/4 my-[50px]'>
        <div className='my-[25px]'>
          <span>Delivery to the address</span>
        </div>
        <div className='grid sm:grid-cols-2 gap-x-[35px] gap-y-[24px]'>
          <div className='flex flex-col'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder='Your first name'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder='Your last name'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='Your working email'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder='Your phone number'
              className='mt-[8px] md:w-[90%] py-[13px] px-[16px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder='Choose your city'
              className='mt-[8px] md:w-[90%] py-[13px] px-[16px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder='Choose your city'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder='Your address'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="zipCode">ZIP Code</label>
            <input type="text" id="zipCode" placeholder='Your ZIP code'
              className='mt-[8px] md:w-[90%] px-[16px] py-[13px] rounded-[7px] border-[1px] border-[#828181] outline-none focus:border-[#F6623E]' />
          </div>
        </div>
      </div>
      <div className='w-full my-[70px]'>
        <div>
          <span>Card information</span>
        </div>
        <div className='flex md:flex-row flex-col-reverse my-[20px]'>
          <div className='md:w-1/2 md:mt-0 mt-[30px]'>
            <div>
              <input type="text" placeholder='Your card number'
                className='py-[13px] px-[16px] w-full outline-none border-[1px] border-[#828181] rounded-[7px] focus:border-[#F6623E]' />
            </div>
            <div>
              <input type="text" placeholder='Name and surname of the cardholder'
                className='py-[13px] px-[16px] w-full outline-none border-[1px] border-[#828181] rounded-[7px] focus:border-[#F6623E] my-[20px]' />
            </div>
            <div className='w-full grid grid-cols-2 gap-x-[32px]'>
              <input type="text" placeholder='MM/YY'
                className=' py-[13px] px-[16px] outline-none border-[1px] border-[#828181] rounded-[7px] focus:border-[#F6623E]' />
              <input type="text" placeholder='CVV/CVC'
                className='py-[13px] px-[16px] outline-none border-[1px] border-[#828181] rounded-[7px] focus:border-[#F6623E]' />
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={bankCard} alt="" />
          </div>
        </div>
        <div className='mt-[40px] flex md:justify-start justify-center'>
          <button className='border-[2px] border-[#F6623E] text-[#F6623E] uppercase px-[35px] py-[10px] font-medium'>Complete order</button>
        </div>
      </div>
    </div>
  )
}

export default Basket
