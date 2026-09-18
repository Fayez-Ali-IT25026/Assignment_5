import BannerImage from "../assets/banner-stack.png";


const Banner = () => {
    return (
        <div>
           <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-5 md:px-10 lg:px-20">
                <div className="pl-5">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold"> Build Your Ideal <br /><span className="gradient-primary bg-clip-text text-transparent">Development Stack</span></h2>
                <p className="mt-5 text-gray-600 max-w-lg leading-6">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits yournext project.</p>
                <div className="flex  gap-3 pt-3">
  <button className="btn gradient-primary text-white border-0">
    Explore Technologies
  </button>

  <button className="btn">
    Learn More
  </button>
</div>
                </div>
           

            
            <div>
               <img
    src={BannerImage}
    alt=""
    className="w-[300px] md:w-[400px] h-auto"
/>
            </div>
            </div>

        </div>
        
        
    );
};

export default Banner;