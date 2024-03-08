import { CameraOutline, ImagesOutline, VideocamOutline } from "react-ionicons"

const Services = () => {
  const servicesLinks = [
    { title: "Photography", icon: <CameraOutline width="30px" height="30px" color="#ea580c" />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum adipisci voluptates a eveniet error?", path: "/" },
    { title: "Video Editing", icon: <VideocamOutline width="30px" height="30px" color="#ea580c" />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum adipisci voluptates a eveniet error?", path: "/" },
    { title: "Photo Editing", icon: <ImagesOutline width="30px" height="30px" color="#ea580c" />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laborum adipisci voluptates a eveniet error?", path: "/" },
  ]

  return (
    <div className="w-full px-[23px] y-20 bg-white relative z-[100] md:px-[190px] " >
      <div className="w-full flex flex-col items-center justify-center gap-10 p-16 " >
        <div className="w-full flex flex-col gap-2 justify-center items-center " >
          <span className="font-medium text-[25px] " >What can I do for you ?</span>
          <p className="text-center text-gray-900" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="w-full flex flex-col gap-10 items-center justify-between md:flex-row " >
            { servicesLinks.map((s) => {
              return (
                <div key={s.title} className="flex flex-col justify-center items-center text-center gap-4 p-8 bg-white transition-all duration-300 rounded-md border shadow-sm border-orange-500 hover:-translate-y-5 hover:bg-orange-50 " >
                  {s.icon}
                  <span className="text-orange-600 font-medium text-xl" >{s.title}</span>
                  <p className="max-w-[350px] text-gray-600 leading-7" >{s.description}</p>
                  <a href={s.path} className="text-orange-700 " >
                    Learn More
                  </a>
                </div>
              )
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services