import aboutImage from '../../assets/images/a3.jpg'

const About = () => {
  return (
    <div className="w-full px-[32px] bg-white relative z-[100] " >
      <div className="w-full flex flex-col items-center justify-center gap-16 p-16 md:flex-row ">
        <img src={aboutImage} alt="about" className='w-[500px] rounded-xl shadow-md transition-all duration-300 hover:translate-y-5 ' />
        <div className='flex flex-col gap-6' >
          <span className='text-orange-600 opacity-[0.06] text-6xl font-extrabold md:text-9xl '>
            ABOUT ME
          </span>
          <span className='text-orange-500 text-3xl font-semibold md:text-5xl '>I just Love my Work!</span>
          <p className='text-gray-900 max-w-[500px] leading-8 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sint, praesentium eius, veniam debitis excepturi amet at ipsum omnis velit dolore tempore necessitatibus expedita placeat unde voluptatibus ab soluta doloremque.
          </p>
          <div className='flex w-full items-center gap-4'>
            <button className='text-white rounded-full bg-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium hover:bg-orange-600 '>
              Contact me
            </button>
            <button className='rounded-full border-2 border-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium hover:text-white hover:bg-orange-500 '>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About