import contactImage from '../../assets/images/contact.jpg'

const Contact = () => {
  return (
    <div className="w-full px-[23px] py-16 bg-[#f6f6f6] relative z-[100] md:py-20 " >
      <div className="w-full flex flex-col items-center justify-center gap-16 p-16 md:flex-row " >
        <img src={contactImage} alt="contact image" className="w-[500px] rounded-xl shadow-sm transition-all duration-300 hover:translate-y-5 " />
        <div className='flex flex-col gap-6 ' >
          <span className='text-orange-600 opacity-[0.06] text-5xl font-extrabold md:text-9xl ' >
            CONTACT ME
          </span>
          <form action="#">
            <div className='flex w-full items-center justify-between gap-5 ' >
              <input type="text" placeholder='Name' className='w-full outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4 ' />
              <input type="email" placeholder='Email' className='w-full outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4 ' />
            </div>
            <input type="email" placeholder='Subjet' className='w-full mt-5 outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4 ' />
            <textarea cols={30} rows={12} placeholder='Message' className='w-full mt-5 outline-none rounded-md shadow-sm border border-orange-300 bg-white px-3 py-4 ' ></textarea >
          </form>
            <button type='button' className='text-white rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 w-fit px-5 py-3 font-medium  ' >
              Submit Message
            </button>
        </div>
      </div>
    </div>
  )
}

export default Contact