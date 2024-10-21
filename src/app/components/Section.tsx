const Section = () => {
  return (
    <div>
     <div className=' bg-[url(./images/PinkDaisies.jpg)] h-[470px]  bg-cover bg-no-repeat bg-fixed'>
     <div className='bg-black h-full bg-opacity-50 flex justify-center flex-col'>
      <div className='text-center text-white'>
        <h1 className='text-4xl font-bold'>10% <span className='font-serif'>Off Selected Flowers for Valentine's Day</span></h1>
       <p className='px-[22rem] py-7 font-thin text-sm leading-7'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      <button className='border border-white p-5 px-14 text-sm font-thin hover:bg-white hover:text-[rgb(121,37,61)] transition-all ease-in-out delay-150 m-5'>Order Now</button> 
      </div>
     </div>
     </div>
    </div>
  )
}

export default Section