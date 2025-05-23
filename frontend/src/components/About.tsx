import aboutImg from '../assets/about.jpg'
import { motion } from "motion/react"

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <h2 className="my-2 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap">
        <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}}  transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-2xl' src={aboutImg} alt="About Me" />
          </div>
        </motion.div>
        <motion.div  whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}}  transition={{duration: 0.5}} className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className='my-2 max-w-xl py-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default About
