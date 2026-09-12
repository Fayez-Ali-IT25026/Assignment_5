import Logo from '../assets/logo-text.png'
const Fotter = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div>
                <img src={Logo} alt="" />
                <p>Curated tools, technologies, and resources for developers building <br />
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
                <p><a href="">Home</a></p>
                <p><a href="">Technologies</a></p>
                <p><a href="">Projects</a></p>
            </div>
            <div>
                <h2>COMPANY</h2>
                <p><a href="">About</a></p>
                <p><a href="">Contact</a></p>
                <p><a href="">Careers</a></p>
            </div>
            <div>
                <h2>LEGAL</h2>
                <p><a href="">Privacy Policy</a></p>
                <p><a href="">Terms of Service</a></p>
                
            </div>
        </div>
    );
};

export default Fotter;