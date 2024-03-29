import { LogoBehance, LogoDeviantart, LogoDribbble, LogoFigma } from "react-ionicons"
import Navbar from "../Navbar"


const Hero = () => {
  return (
    <div className="hero w-full h-screen flex items-center justify-center px-5 relative md:px-[250px] " >
      <Navbar />
      <div className="flex w-full flex-col gap-8 z-50 items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " >
        <span className="text-3xl font-semibold text-orange-100 md:text-4xl " >
          Hi, I'm Thomas
        </span>
        <span className="text-6xl font-semibold text-orange-200 md:text-7xl " >
          Photographer
        </span>
        <p className="text-gray-200 max-w-[450px] leading-7 text-center md:max-w-[600px] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aut eum fugit distinctio illum optio enim eius consequuntur tenetur! Laborum repellendus repellat impedit vel nostrum et odit iste placeat ratione!
        </p>
        <div className="flex w-full items-center justify-center gap-5" >
          <a target="_blank" href="https://www.dribbble.com/"><LogoDribbble color={"#fff"} width={"30px"} height={"30px"} /></a>
          <a target="_blank" href="https://www.deviantart.com/"><LogoDeviantart color={"#fff"} width={"30px"} height={"30px"} /></a>
          <a target="_blank" href="https://www.behance.net/"><LogoBehance color={"#fff"} width={"30px"} height={"30px"} /></a>
          <a target="_blank" href="https://www.figma.com/"><LogoFigma color={"#fff"} width={"30px"} height={"30px"} /></a>
          
        </div>
        <div className="flex w-full items-center justify-center gap-4 ">
          <button className="text-white rounded-full bg-orange-400 transition-all duration-300 w-fit px-5 py-3 font-medium hover:bg-orange-500 " >Contact with me</button>
          <button className="text-white animate-bounce rounded-full border-2 border-orange-400 transition-all duration-300 font-medium w-fit px-5 py-3 hover:bg-orange-500 hover:border-orange-500 " >See my work</button>
        </div>
      </div>
      <div className="flex w-full z-10 h-full bg-[#120800] opacity-[0.82] absolute top-0 left-0 " ></div>
    </div>

  )
}

export default Hero