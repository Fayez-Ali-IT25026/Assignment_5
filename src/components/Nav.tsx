import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
    <div className="container mx-auto flex items-center justify-between px-5 py-5 md:px-15">

        <button className="md:hidden text-2xl">
            ☰
        </button>

        <div>
            <img
                src={Logo}
                alt="Dev Stack Logo"
                className="w-32 md:w-40"
            />
        </div>

        <div className="hidden md:block">
            <ul className="flex gap-8">
                <li className="text-[#DB2777]"><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>

        <div className="flex gap-2 md:gap-3">
            <button className="btn rounded-2xl btn-sm md:btn-md">
                Sign In
            </button>

            <button className="btn rounded-2xl bg-[#D91B7E] text-white btn-sm md:btn-md">
                Sign Up
            </button>
        </div>

    </div>
</nav>
  )
}

export default Nav