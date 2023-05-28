import React from 'react'
import { useState } from 'react'
import "./headerStyle.css"
import logo from "../../images/S27EOULS.png"
import { BsSearch } from "react-icons/bs"
import { GrLanguage } from "react-icons/gr"
import { HiOutlineArrowSmRight } from "react-icons/hi"
import { CgArrowTopRight } from "react-icons/cg"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const HandleShowMenu = () => {
        setShowMenu(showMenu => !showMenu)
    }
    return (
        <>
            <header className='relative w-full h-[80px]  justify-between  flex shadow-md'>
                <div className='container  flex  w-full h-[90px] '>
                    <img className=' w-[100px] h-[15px] mt-8 ml-4' src={logo} />

                    <ul className='flex'>
                        <li class="hoverable ">
                            <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base  ">Services</a>
                            <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white ">
                                <div class="container mx-auto w-full flex flex-wrap mx-2">

                                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/3 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div class="flex items-center">
                                            <svg class="h-8 mb-3 mr-3 fill-current "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                            </svg>
                                            <h3 class="font-bold text-xl  text-bold mb-2">Heading 1</h3>
                                        </div>
                                        <p class=" text-sm p-3">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                            Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling
                                        </p>                                        <div class="flex items-center py-3">
                                            <svg class="h-6 pr-3 fill-current "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" class=" bold border-b-2">Find out more...</a>
                                        </div>
                                    </ul>
                                    {/* ................... */}
                                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/3  border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div class="flex items-center">
                                            <svg class="h-8 mb-3 mr-3 fill-current"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                            </svg>
                                            <h3 class="font-bold text-xl text-bold mb-2">Heading 2</h3>
                                        </div>
                                        <p class=" text-sm p-3">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                            Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling
                                        </p>
                                        <div class="flex items-center py-3">
                                            <svg class="h-6 pr-3 fill-current "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" class=" bold border-b-2 ">Find out more...</a>
                                        </div>
                                    </ul>
                                    {/* ........................... */}
                                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/3  border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div class="flex items-center">
                                            <svg class="h-8 mb-3 mr-3 fill-current "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                            </svg>
                                            <h3 class="font-bold text-xl text-bold mb-2">Heading 3</h3>
                                        </div>
                                        <p class=" text-sm p-3">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                                            Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling
                                        </p>                                        <div class="flex items-center py-3">
                                            <svg class="h-6 pr-3 fill-current "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" class=" bold border-b-2 ">Find out more...</a>
                                        </div>
                                    </ul>
                                    {/* ....................... */}
                                    {/* //////////// */}
                                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/3 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">

                                        <div className='w-[250px] h-[250px] bg-gray-200 rounded-3xl p-7 flex flex-wrap' >
                                            <h1 className=' font-bold text-xl text-bold '>Product Browser</h1>
                                            <p >
                                                Instant global data access to +1,700 agri-food
                                                products. Start browsing for your products of interest.
                                            </p>
                                            <button className='w-[190px] h-[27px] rounded-3xl bg-black text-white flex gap-3 pl-4 mt-1'>Browse Products
                                                <HiOutlineArrowSmRight className='mt-1' /></button>
                                        </div>
                                    </ul>

                                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/3  border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className='w-[250px] h-[250px] bg-gray-200 rounded-3xl p-7 flex flex-wrap' >
                                            <h1 className=' font-bold text-xl text-bold '>Product Browser</h1>
                                            <p >
                                                Instant global data access to +1,700 agri-food
                                                products. Start browsing for your products of interest.
                                            </p>
                                            <button className='w-[190px] h-[27px] rounded-3xl bg-black text-white flex gap-3 pl-4 mt-1'>Browse Products
                                                <HiOutlineArrowSmRight className='mt-1' /></button>
                                        </div>
                                    </ul>
                                    {/* ....................... */}
                                </div>
                            </div>
                        </li>

                        <li class="hoverable">
                            <a href="#" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base ">Resources</a>
                            <div className='p-7 mega-menu mb-16 sm:mb-0 shadow-xl bg-white '>
                                <div className='container mx-auto w-full flex flex-wrap '>
                                    <ul className='m-8 w-full sm:w-1/2 lg:w-1/3  sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>Global Price </h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>Webinars</h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>White Paper</h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>Data Coverage</h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>Sourcing Requests Quota</h1>
                                        </Link>

                                    </ul>

                                </div>

                            </div>
                        </li>
                        <li class="hoverable">
                            <a href="#" class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base ">Company</a>
                            <div className='p-7 mega-menu mb-16 sm:mb-0 shadow-xl bg-white '>
                                <div className='container mx-auto w-full flex flex-wrap '>
                                    <ul className='m-8 w-full sm:w-1/2 lg:w-1/3  sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3'>
                                        <Link>
                                            <h1 className='text-3xl font-bold  text-bold mb-2'>About Us</h1>
                                        </Link>
                                        <Link className=''>
                                            <h1 className='text-3xl font-bold flex flex-wrap gap-1  text-bold mb-2'>Careers <CgArrowTopRight /></h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold flex flex-wrap gap-1 text-bold mb-2'>Blog <CgArrowTopRight /></h1>
                                        </Link>
                                        <Link>
                                            <h1 className='text-3xl font-bold flex flex-wrap gap-1  text-bold mb-2'>Contact Us <CgArrowTopRight /></h1>
                                        </Link>


                                    </ul>

                                </div>

                            </div>
                        </li>

                    </ul>
                </div>

                <div className='  flex justify-between gap-5 p-7' >
                    <p className='w-[40px] h-[40px] rounded-full justify-center flex items-center hover:cursor-pointer hover:bg-gray-200'><BsSearch /></p>
                    <button className='w-[90px] h-[37px] rounded-3xl bg-black text-white'>Sign in</button>

                    <div className='flex gap-1 '>
                        <label htmlFor='underline_select' className='mt-2 cursor-pointer '><GrLanguage /> </label>
                        <select id="underline_select" class="py-1 px-2  text-sm text-black  focus:outline-none peer">

                            <option selected > English</option>
                            <option value="CA">Arabic</option>
                            <option value="US">French </option>
                            <option value="DE">German</option>
                        </select>
                    </div>
                </div>
            </header>
        </>
    )
}
