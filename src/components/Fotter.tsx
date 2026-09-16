import Logo from '../assets/logo-text.png'

const Fotter = () => {
    return (
        <footer className='container mx-auto px-15 py-10 border-t border-gray-200'>

            <div className='flex justify-between items-center'>

                <div>
                    <img src={Logo} alt="DevStack" className='w-24' />

                    <p className='text-[#64748B] py-5 text-sm leading-6'>
                        Curated tools, technologies, and resources for developers building <br />
                        modern software.
                    </p>

                    <div>
                        <ul className='flex gap-4 text-sm'>
                            <li>
                                <a href="" className='text-[#64748B] hover:text-black transition'>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="" className='text-[#64748B] hover:text-black transition'>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="" className='text-[#64748B] hover:text-black transition'>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-sm font-semibold mb-4'>PRODUCT</h2>

                    <p className='text-[#64748B] text-sm mb-2'>
                        <a href="" className='hover:text-black transition'>Home</a>
                    </p>

                    <p className='text-[#64748B] text-sm mb-2'>
                        <a href="" className='hover:text-black transition'>Technologies</a>
                    </p>

                    <p className='text-[#64748B] text-sm'>
                        <a href="" className='hover:text-black transition'>Projects</a>
                    </p>
                </div>

                <div>
                    <h2 className='text-sm font-semibold mb-4'>COMPANY</h2>

                    <p className='text-[#64748B] text-sm mb-2'>
                        <a href="" className='hover:text-black transition'>About</a>
                    </p>

                    <p className='text-[#64748B] text-sm mb-2'>
                        <a href="" className='hover:text-black transition'>Contact</a>
                    </p>

                    <p className='text-[#64748B] text-sm'>
                        <a href="" className='hover:text-black transition'>Careers</a>
                    </p>
                </div>

                <div>
                    <h2 className='text-sm font-semibold mb-4'>LEGAL</h2>

                    <p className='text-[#64748B] text-sm mb-2'>
                        <a href="" className='hover:text-black transition'>Privacy Policy</a>
                    </p>

                    <p className='text-[#64748B] text-sm'>
                        <a href="" className='hover:text-black transition'>Terms of Service</a>
                    </p>
                </div>

            </div>

            <div className='border-t border-gray-200 mt-8 pt-5 flex justify-between text-xs text-[#94A3B8]'>
                <p>© 2026 DevStack. All rights reserved.</p>

                <div className='flex gap-5'>
                    <a href="" className='hover:text-black transition'>
                        Privacy
                    </a>

                    <a href="" className='hover:text-black transition'>
                        Terms
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Fotter;