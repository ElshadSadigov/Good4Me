import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const FaqDataCard = ({ data }) => {
    const [show, setShow] = useState(false)
    return (
        <div key={data.id} className='md:w-[70%] w-[100%] flex justify-between cursor-pointer my-[15px] border-b-[2px] border-[#E5E8Ed] py-[20px]' onClick={()=>setShow(!show)}>
            <div>
                <btn className="md:text-[20px] text-[15px] font-semibold text-[#1E212C]">{data.title}</btn>
                {show ? <div className='mt-[16px] md:text-[16px] text-[14px] text-[#828181] pe-[15px]'>{data.text}</div> : null}
            </div>
            <div>
                {show ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
            </div>
        </div>
    )
}

export default FaqDataCard
