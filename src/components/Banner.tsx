import BannerImage from "../assets/banner-stack.png";


const Banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center container mx-auto px-6 ">
                <div className="pl-30">
                         <h2 className="text-5xl font-bold"> Build Your Ideal <br /><span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>
                <p className="mt-5 text-gray-600 max-w-lg leading-6">Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits yournext project.</p>
                <div className="flex  gap-3 pt-3">
  <button className="btn bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white border-0">
    Explore Technologies
  </button>

  <button className="btn">
    Learn More
  </button>
</div>
                </div>
           

            
            <div>
                <img src={BannerImage} alt="" />
            </div>
            </div>

        </div>
        
        
    );
};

export default Banner;