import React from 'react'
import { Link } from 'react-router-dom';



export const Sidebar = () => {

    return (<>
        <div className='bg-gray-100 h-auto'>

            <ul className='w-full p-10 '>
                <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <a>
                        Seafood <span className='text-gray-500 font-normal  '>( 224 )</span>
                        </a>
                    </li>
                
                <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Vegetables  <span className='text-gray-500 font-normal  '>( 162 )</span>
                        </Link>
                    </li>
                
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Packaged Fruits & Vegetables <span className='text-gray-500 font-normal  '>( 142 )</span>
                        </Link>
                    </li>
                
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Fruits <span className='text-gray-500 font-normal  '>( 139 )</span>
                        </Link>
                    </li>
                
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Grains, Cereal & Legumes <span className='text-gray-500 font-normal  '>( 95 )</span>
                        </Link>
                    </li>
                
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Oil & Fats <span className='text-gray-500 font-normal  '>( 89 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Herbs, Spices & Seasonings <span className='text-gray-500 font-normal  '>( 78 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Nuts & Seeds <span className='text-gray-500 font-normal  '>( 72 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Packaged Meat & Seafood <span className='text-gray-500 font-normal  '>( 57 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Dairy <span className='text-gray-500 font-normal  '>( 56 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Snack & Confectionary<span className='text-gray-500 font-normal  '>( 54 )</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer h-[35px] border-b-2 font-semibold mb-4'>
                        <Link>
                        Simple Processed Fruits <span className='text-gray-500 font-normal  '>( 44 )</span>
                        </Link>
                    </li>
                
                
                
                
            
                
            </ul>




        </div>
        



    </>

    )
}
