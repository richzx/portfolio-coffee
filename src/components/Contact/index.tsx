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
        </div>
      </div>
    </div>
  )
}

export default Contact