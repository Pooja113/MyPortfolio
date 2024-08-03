import { FaGithub, FaInstagram, FaLinkedin,  FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
         <h3 className="mx-2 w-18">Pooja Paul</h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  )
}

export default Navbar
