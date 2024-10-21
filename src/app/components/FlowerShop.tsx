"use client"
import React from 'react'



export default function FlowerShop(){

    
  return (
    <div className='bg-[rgb(244,242,236)]'>
    <h1 className='text-[rgb(121,37,61)] text-[2.5rem] text-center font-serif pt-20 pb-14 font-medium'>COTTON Flowers Shop</h1>
    <div className='flex overflow-x-hidden cursor-pointer'>
        <div className='bg-[url(./images/01.jpg)] h-[300px] w-[300px] bg-no-repeat bg-contain shrink-0'></div>
        <div className='bg-[url(./images/02.jpg)] h-[300px] w-[300px] bg-no-repeat bg-contain shrink-0'></div>
        <div className='bg-[url(./images/03.jpg)] h-[300px] w-[300px] bg-no-repeat bg-contain shrink-0'></div>
        <div className='bg-[url(./images/04.jpg)] h-[300px] w-[300px] bg-no-repeat bg-contain shrink-0'></div>
        <div className='bg-[url(./images/05.jpg)] h-[300px] w-[300px] bg-no-repeat bg-contain shrink-0'></div>
    </div>
    <div className='flex justify-center mt-12'>
        <button className='border p-5 border-[rgb(121,37,61)] text-[rgb(121,37,61)] text-sm  font-thin font-serif px-16 hover:text-white hover:bg-[rgb(121,37,61)] transition-all ease-in-out delay-150 mb-16'>Follow Us</button>
        </div>
    </div>
  )
}

