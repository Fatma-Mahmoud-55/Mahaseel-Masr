import React from 'react'
import logo from "../../images/task.jpg"

export const ProductCard = ({ productName,desc,image}) => {
    return (<>
        <div className=''>
            <div className='w-[190px]  p-1 m-3 h-[330px] overflow overflow-hidden flex flex-wrap justify-center'>
                <img src={image} className='w-[80%] h-[140px] m-2'/>
                <div className='p-3'>

                    <h1 className='font-bold mb-2 '>{productName}</h1>
                    <p className='text-sm break-words font-thin text-slate-600 italic'>{desc}</p>

                </div>
            </div>









        </div>
    </>

    )
}
