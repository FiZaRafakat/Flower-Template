import Footer from "../components/footer"
import Nav from "../components/Nav"

const page = () => {
  return (
    <main className="bg-[rgb(244,242,236)] flex justify-center items-center w-full flex-col">
        <div className="w-[1100px] ">
            <Nav/>
        <div className="mt-56 mb-40">
        <h1 className='text-center text-4xl font-serif text-[rgb(121,37,61)] font-medium mb-16'>About COTTON</h1>

       <div className="flex">
        <div className="border border-[rgb(231,226,210)] w-1/2 flex justify-center flex-col items-center text-center">
            <h1 className="text-xl font-thin mt-16 mb-10">Delivering Fresh Flowers Since 2035</h1>
            <p className="text-sm px-16 tracking-wider leading-7 mb-7">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p className="text-sm px-16 tracking-wider leading-7 ">​This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what   services you provide.</p>

            <div className='flex justify-center mt-12'>
        <button className='border p-5 border-[rgb(121,37,61)] text-[rgb(121,37,61)] text-sm  font-thin font-serif px-16 hover:text-white hover:bg-[rgb(121,37,61)] transition-all ease-in-out delay-150 mb-16'>Contact Us</button>
        </div>
        </div>
        <div className="bg-[url(./images/about.webp)] h-[40rem] w-1/2 bg-no-repeat bg-contain"></div>
       </div>

        </div>
        </div>
        <Footer />
    </main>
  )
}

export default page