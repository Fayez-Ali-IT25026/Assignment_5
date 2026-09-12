import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white container mw-auto">
      
      <div>
        <img src={Logo} alt="Dev Stack Logo" className="w-40" />
      </div>

      <div>
        <ul className="flex gap-8">
          <li className='text-[#DB2777]'><a href="http://">Home</a> </li>
          <li><a href="http://">Technologies</a></li>
          <li><a href="">Projects</a></li>
          
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="btn rounded-2xl">Sign In</button>
        <button className="btn rounded-2xl bg-[#D91B7E] text-white">Sign Up</button>
      </div>

    </nav>
  )
}

export default Nav