import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[rgb(231,226,210)] w-full h-[580px] bg-fixed'>
      <div className='flex justify-center mt-28'> 
      <div className='w-[270px] h-[350px] border-2 border-[rgb(244,242,236)] flex justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-[95px] h-[95px] bg-[rgb(121,37,61)] flex justify-center items-center text-5xl font-serif text-[rgb(244,242,236)] '>
            <Link href="/">C</Link>
            </div>
            <h2 className='pt-1 text-[rgb(121,37,61)] font-thin text-[1rem] font-serif'>Flower Shop</h2>
        </div>
      </div>
      <div className='w-[270px] border-2 border-l-0 border-[rgb(244,242,236)] flex items-center justify-center flex-col'>
        <h1 className=' text-[rgb(121,37,61)] text-3xl pb-8 font-serif'>Quick Menu</h1>
        <ul className='text-base font-thin italic leading-10 text-center'>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="./shop">Shop</Link>
            </li>
            <li>
            <Link href="./about">About</Link>
            </li>
            <li>
            <Link href="./contact">Contact</Link>
            </li>
        </ul>
      </div>
      <div className='w-[270px] border-2 border-l-0 border-[rgb(244,242,236)] flex items-center justify-center flex-col'>
        <h1 className=' text-[rgb(121,37,61)] text-3xl pb-8 font-serif'>Policy</h1>
        <ul className='text-base font-thin italic leading-10 text-center'>
            <li>Shipping & Returns</li>
            <li>Store Policy</li>
            <li>Payment Methods</li>
            <li>FAQ</li>
        </ul>
      </div>
      <div className='w-[270px] border-2 border-l-0 border-[rgb(244,242,236)] flex items-center justify-center flex-col'>
        <h1 className=' text-[rgb(121,37,61)] text-3xl pb-8 font-serif'>Address</h1>
        <ul className='text-base font-thin italic leading-10 text-center'>
            <li>500 Terry Francine Street</li>
            <li>San Francisco, CA 94158</li>
            <li className='mt-9'>
            <div className='flex justify-center items-center gap-8'>
            Follow 
            <div className='gap-4 inline-flex'>
            <p className=''><FaFacebookF size={20}/></p>
            <p><FaInstagram size={20}/></p>
            </div>
            </div>
            </li>
        </ul>
        
      </div>


      </div>
     <div className='flex justify-center text-[0.755rem] mt-14'>© 2035 by COTTON. Powered and secured by Wix</div>
    </div>
  )
}

export default Footer