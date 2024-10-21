import React from 'react'
import OfferCard from './OfferCard'

const Offer = () => {
  return (
    <div className='bg-[rgb(244,242,236)] pb-16 '>
        <div className="text-center pt-32">
            <h1 className='text-[2.2rem] font-serif font-semibold tracking-wider text-[rgb(121,37,61)]'>Fresh, Seasonal, Beautiful</h1>
            <h2 className='mt-3 text-[1.2rem]'>Order Now and Get Same-Day-Delivery</h2>
        </div>
       <OfferCard />
        <div className='flex justify-center mt-12'>
        <button className='border p-5 border-[rgb(121,37,61)] text-[rgb(121,37,61)] text-sm  font-thin font-serif px-16 hover:text-white hover:bg-[rgb(121,37,61)] transition-all ease-in-out delay-150 mb-16'>Shop All</button>
        </div>
    </div>
  )
}

export default Offer

{/* <h2>I'm a product</h2>
        <h3><del>$75.00</del> <ins>$67.50</ins></h3> */}