import React from 'react'
import { useState } from "react"
import { SearchBar } from './../../components/SearchBar/SearchBar';
import { IoIosArrowBack } from "react-icons/io"
import { Link } from 'react-router-dom';
import { ProductCard } from './../../components/ProductCard/ProductCard';
import data from './../../Data.json';
import { Sidebar } from './../../components/Sidebar/Sidebar';
import { Footer } from './../../components/Footer/Footer';

export const Home = () => {


    return (< >


        <div className='  flex-wrap  flex justify-center items-center  '>
            <div className=' border-b w-[900px] mb-10 pb-10'>
                <Link to="#" className='flex gap-2 m-10'>
                    <IoIosArrowBack className='mt-1' />
                    Back To Product Browser
                </Link>
                <div className='flex justify-center items-center '>
                    <h1 className='font-bold text-4xl text-bold mb-[20px] '>Browse Products by Category</h1>
                </div>
            </div>
            <SearchBar />
        </div>

        <div className='flex'>

        <div className='w-1/4 m-5'>
            <Sidebar/>
        </div>


    <div className='w-3/4'>
        <div className='flex flex-wrap justify-center items-center'>
        {data.map((pro, index) => (
            <ProductCard
                productName={pro.productName}
                desc={pro.desc}
                image={pro.image}
            />
        ))}
        </div>
</div>


        </div>


        <Footer/>
    </>

    )
}
