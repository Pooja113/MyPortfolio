import profilePic from '../assets/kevinRushProfile.png'
import { motion } from "motion/react"

const container = (delay: number) => ( {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay
     }
  }
})
 
const Hero = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
              <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Pooja Paul</motion.h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</span>
          </div>
          <p className="my-2 max-w-xl py-6 font-light tracking-tight"> Over the past three years as a web developer, including 1.5 years specializing as a MERN stack developer, I have honed my skills in a diverse range of technologies and frameworks.I am proficient in JavaScript, TypeScript, and PHP, with extensive experience using frameworks and libraries such as React.js, Next.js, Express.js, Redux, and Tailwind. My expertise extends to both front-end and back-end development, allowing me to build seamless, high-performance applications.</p>

<p className="max-w-xl font-light tracking-tight">I am well-versed in working with databases like MongoDB, PostgreSQL, and MySQL, and I leverage tools and technologies such as Docker, Git, and Jenkins to streamline development and deployment processes. My experience with microservices and real-time technologies like SocketIO further enhances my ability to create scalable and dynamic solutions.</p>
        </div>
        <div className='w-full lg:w-1/2 p-8'>
            <div className='flex justify-center'>
              <img src={profilePic} alt="Pooja Paul" />
          </div></div>
      </div>
    </div>
  )
}

export default Hero
