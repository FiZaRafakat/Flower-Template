import React from 'react'
import Nav from '../components/Nav'
import OfferCard from '../components/OfferCard'
import Footer from '../components/footer'

const page = () => {
  return (
   <main className='bg-[rgb(244,242,236)] flex justify-center items-center w-full flex-col'>
    <div className="w-[1100px] h-[1600px]">
      <Nav />
      <div className='mt-60'>
        <h1 className='text-center text-5xl font-serif text-[rgb(121,37,61)]'>Shop Flowers</h1>
        <div>
          <OfferCard />
          <div className='offer flex mt-20 justify-between'>
          <div className='box select-none'>
          <div className='bg-[url(./images/bucket-4.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain'></div>
         <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'>$75.00</h3></div>
        </div>
        <div className='box select-none'>
          <div className='bg-[url(./images/bucket-5.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain'></div>
         <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'>$75.00</h3></div>
        </div>
        <div className='box select-none'>
          <div className='bg-[url(./images/bucket-6.webp)] h-[500px] w-[350px] bg-no-repeat bg-contain'></div>
         <div className='text-center'>
            <h2 className='text-[1rem] font-extrabold font-serif'>I'm a product</h2>
         <h3 className='text-[rgb(121,37,61)] text-[0.95rem] mt-2'>$75.00</h3></div>
        </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
   </main>
  )
}

export default page