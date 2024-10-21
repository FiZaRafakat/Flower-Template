import Footer from "../components/footer"
import Nav from "../components/Nav"

const page = () => {
  return (
    <main className="bg-[rgb(244,242,236)] flex justify-center items-center w-full flex-col">
        <div className="w-[1100px] ">
            <Nav/>
        <div className="mt-56 mb-40">
        <h1 className='text-center text-4xl font-serif text-[rgb(121,37,61)] font-medium mb-16'>Contact Us</h1>

       <div className="flex">
        <div className="border border-[rgb(231,226,210)] w-1/2 flex  flex-col ">
            <h1 className="text-xl font-thin mt-24 mb-16 text-center font-serif">We’re Here for Any Question</h1>
        <form action="" className="flex px-12 flex-col">
         <div className="flex gap-5 mb-6">
         <div className="input-box  w-25 h-20 flex flex-col ">
          <div><label htmlFor="" className="text-[0.95rem] font-thin ">First Name *</label></div>
          <input type="text" required className="  outline-none p-3 border-b bg-transparent border-black hover:bg-[rgb(121,37,61)] hover:bg-opacity-10 hover:border-[rgb(121,37,61)] mt-2" />
          </div>
          <div className="input-box  w-25 h-20 flex flex-col ">
          <div><label htmlFor="" className="text-[0.95rem] font-thin ">Last Name *</label></div>
          <input type="text" required className="  outline-none p-3 border-b bg-transparent border-black hover:bg-[rgb(121,37,61)] hover:bg-opacity-10 hover:border-[rgb(121,37,61)] mt-2" />
          </div>
         </div>
         <div className="flex gap-5 mb-6">
         <div className="input-box  w-25 h-20 flex flex-col ">
          <div><label htmlFor="" className="text-[0.95rem] font-thin ">Email *</label></div>
          <input type="text" required className="  outline-none p-3 border-b bg-transparent border-black hover:bg-[rgb(121,37,61)] hover:bg-opacity-10 hover:border-[rgb(121,37,61)] mt-2" />
          </div>
          <div className="input-box  w-25 h-20 flex flex-col ">
          <div><label htmlFor="" className="text-[0.95rem] font-thin ">Subject</label></div>
          <input type="text" className="  outline-none p-3 border-b bg-transparent border-black hover:bg-[rgb(121,37,61)] hover:bg-opacity-10 hover:border-[rgb(121,37,61)] mt-2" />
          </div>
         </div>
         <div className="input-box  w-25 h-32 flex flex-col ">
          <div><label htmlFor="" className="text-[0.95rem] font-thin">Leave us a message....</label></div>
          <textarea name="" id="" rows={10} className="outline-none border-b bg-transparent border-black hover:bg-[rgb(121,37,61)] hover:bg-opacity-10 hover:border-[rgb(121,37,61)] mt-4"></textarea>
         </div>
         <div className="mt-5">
          <button className="bg-[rgb(121,37,61)] w-full py-3 text-sm font-thin text-white font-serif hover:bg-black transition-all ease-in-out delay-150">Submit</button>
         </div>
          </form>  
        <div className="flex justify-around text-center text-base font-thin mt-20">
          <div className="address">
            <h2 className="mb-6">Address</h2>
            <p className="pb-1">500 Terry Francine St.</p>
            <p>SF, CA 94158</p>
          </div>
          <div className="info">
            <h2 className="mb-6">Info</h2>
            <p className="pb-1">123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
        </div>
           
        </div>
        <div className="bg-[url(./images/contact.webp)] h-[54rem] w-1/2 bg-no-repeat bg-contain"></div>
       </div>

        </div>
        </div>
        <Footer />
    </main>
  )
}

export default page