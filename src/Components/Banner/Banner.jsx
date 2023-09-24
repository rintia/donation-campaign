
const Banner = () => {
    return (
        <div className="hero h-96" style={{backgroundImage: 'url(https://i.ibb.co/ySb7hZC/tim-marshall-c-Atz-HUz7-Z8g-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
            <div className="relative">
        <input type="text" placeholder="search here.." className="input input-bordered w-full pr-16" /> 
        <button className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none">Search</button>
      </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;