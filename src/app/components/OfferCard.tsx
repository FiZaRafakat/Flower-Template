import React from 'react'

const OfferCard = () => {
  return (
    <div className="offer flex mt-20 justify-between">
        <div className='box select-none'>
        <div className='bg-[url(./images/bucket1.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain '> 
         <span className='bg-[rgb(121,37,61)] text-white text-[0.87rem] p-1 px-2'>VDAY 10% Off</span></div>
         <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'><del>$75.00</del> <ins>$67.50</ins></h3></div>
        </div>
        <div className='box select-none'>
        <div className='bg-[url(./images/bucket-2.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain'>
        <span className='bg-[rgb(121,37,61)] text-white text-[0.87rem] p-1 px-2'>VDAY 10% Off</span></div>
         <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'><del>$75.00</del> <ins>$67.50</ins></h3></div>
        </div>
        <div className='box select-none'>
        <div className='bg-[url(./images/bucket-3.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain'>
        <span className='bg-[rgb(121,37,61)] text-white text-[0.87rem] p-1 px-2 '>VDAY 10% Off</span></div>
        <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'><del>$75.00</del> <ins>$67.50</ins></h3></div>
        </div> 
        </div>
  )
}

export default OfferCard