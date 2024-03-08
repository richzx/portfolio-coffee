import p1 from '../../assets/images/w1.jpg'
import p2 from '../../assets/images/w2.jpg'
import p3 from '../../assets/images/w3.jpg'
import p4 from '../../assets/images/w4.jpg'
import p5 from '../../assets/images/w5.jpg'
import p6 from '../../assets/images/w6.jpg'
import p7 from '../../assets/images/w7.jpg'
import p8 from '../../assets/images/w8.jpg'
import p9 from '../../assets/images/w9.jpg'
import p10 from '../../assets/images/w10.jpg'

const Projects = () => {
  const projectLinks = [
    { image: p1, title: "Project", path: "/project1" },
    { image: p5, title: "Project", path: "/" },
    { image: p3, title: "Project", path: "/" },
    { image: p6, title: "Project", path: "/" },
    { image: p10, title: "Project", path: "/" },
    { image: p8, title: "Project", path: "/" },
    { image: p2, title: "Project", path: "/" },
    { image: p9, title: "Project", path: "/" },
    { image: p4, title: "Project", path: "/" },
    { image: p7, title: "Project", path: "/" },
  ]

  return (
    <div className="w-full px-[32px] bg-[#f6f6f6] relative z-[100] ">
      <div className='w-full flex flex-col items-center justify-center gap-10 p-16 '>
        <div className='w-full flex flex-col gap-2 justify-center items-center ' >
          <span className='font-medium text-[30px] text-orange-600 '>My Latest Projects</span>
          <p className='text-center text-gray-900 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <ul className='w-full flex items-center justify-center gap-5 flex-wrap ' >
          { projectLinks.map((p,index:number) => {
            return(
              <li key={index} className='h-fit grow md:h-[40vh] ' >
                <a href={p.path}>
                  <img src={p.image} alt={p.title} className='max-h-full min-w-full object-cover rounded-md shadow-sm align-bottom ' />
                </a>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default Projects