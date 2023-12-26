import React from 'react'
import faqData from '../data/faqData'
import FaqDataCard from '../components/faqDataCard'

const FAQ = () => {
  return (
    <div className='pt-[220px] lg:px-[120px] md:px-[60px] px-[30px] flex flex-col items-center'>
        <div>
            <span className='uppercase text-[32px] font-semibold'>faq</span>
        </div>
        <div className='my-[25px] w-full flex flex-col items-center'>
            {faqData.map((item)=>(
                <FaqDataCard data={item}/>
            ))}
        </div>

    </div>
  )
}

export default FAQ
