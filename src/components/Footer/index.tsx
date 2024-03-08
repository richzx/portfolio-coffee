import { LogoBehance, LogoDeviantart, LogoDribbble } from "react-ionicons"

const Footer = () => {
  return (
    <div className="w-full h-[50px] bg-white border-t border-t-orange-300 relative z-[100] " >
      <div className="w-full flex items-center justify-between px-[23px] md:px-[60px] " >
        <div className="text-orange-400 font-bold text-[28px] cursor-pointer md:ml-[12px] " >
          Tom <span className="text-orange-200 " >Design</span>
        </div>
        <div className="flex items-center gap-6" >
          <a href="#"><LogoDribbble color={'#333'} cssClasses={"cursor-pointer transition-all duration-300 hover:fill-orange-400 "} /></a>
          <a href="#"><LogoBehance color={'#333'} cssClasses={"cursor-pointer transition-all duration-300 hover:fill-orange-400 "} /></a>
          <a href="#"><LogoDeviantart color={'#333'} cssClasses={"cursor-pointer transition-all duration-300 hover:fill-orange-400 "} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer