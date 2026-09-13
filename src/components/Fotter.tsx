import Logo from '../assets/logo-text.png'
const Fotter = () => {
    return (
        <div className='flex justify-between items-center container mx-auto px-15'>
            <div>
                <img src={Logo} alt="" />
                <p className='text-[#64748B] py-5'>Curated tools, technologies, and resources for developers building <br />
modern software.</p>
<div >
    <ul className='flex gap-3'>
        <li><a href="">GitHub</a></li>
        <li><a href="">Twitter</a></li>
        <li><a href="">LinkedIn</a></li>
    </ul>
</div>

            </div>
            <div>
                <h2>PRODUCT</h2>
                <p className='text-[#64748B]'><a href="">Home</a></p>
                <p className='text-[#64748B]'><a href="">Technologies</a></p>
                <p className='text-[#64748B]'><a href="">Projects</a></p>
            </div>
            <div>
                <h2>COMPANY</h2>
                <p className='text-[#64748B]'><a href="">About</a></p>
                <p className='text-[#64748B]'><a href="">Contact</a></p>
                <p className='text-[#64748B]'><a href="">Careers</a></p>
            </div>
            <div>
                <h2>LEGAL</h2>
                <p className='text-[#64748B]'><a href="">Privacy Policy</a></p>
                <p className='text-[#64748B]'><a href="">Terms of Service</a></p>
                
            </div>
        </div>
    );
};

export default Fotter;