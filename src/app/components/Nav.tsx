"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();  

  return (
    <div className='Top fixed w-[1100px] bg-[rgb(244,242,236)] pt-10'>
    <div className="bg-[rgb(121,37,61)] text-white text-center p-4 font-normal ">
      Valentine’s Day Promotions <a href="" className="underline">Shop Now</a>
    </div>
    <div className="nav flex justify-between border border-[rgb(231,226,210)]">
        <div className="c text-[rgb(121,37,61)] text-center font-normal text-4xl bg-[rgb(231,226,210)] py-2 px-4 hover:text-black">
        <Link href="/">C</Link>
          </div>
        <ul className="flex font-thin py-5 cursor-pointer">
        <li className={`ml-5 ${pathname === '/' ? 'text-[rgb(121,37,61)]' : 'text-black'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`ml-8 hover:text-[rgb(121,37,61)] ${pathname === '/shop' ?'text-[rgb(121,37,61)]' : 'text-black'}`}>
           <Link href="./shop">Shop</Link>
          </li>
          <li className={`ml-8 hover:text-[rgb(121,37,61)] ${pathname === '/about' ?'text-[rgb(121,37,61)]' : 'text-black'}`}>
          <Link href="./about">About</Link>
          </li>
          <li className={`ml-8 hover:text-[rgb(121,37,61)] ${pathname === '/contact' ?'text-[rgb(121,37,61)]' : 'text-black'}`}>
          <Link href="./contact">Contact</Link>
          </li>
        </ul>
        <div className="log flex font-thin py-5 cursor-pointer">
          <p className="ml-8 hover:text-[rgb(121,37,61)]">Log In</p>
          <p className="ml-8 mr-8 hover:text-[rgb(121,37,61)]">Cart(0)</p>
        </div>
      </div>
    </div>
  )
}

export default Nav

// <li className="ml-5 text-[rgb(121,37,61)] ">
// <li className="ml-8 hover:text-[rgb(121,37,61)]">