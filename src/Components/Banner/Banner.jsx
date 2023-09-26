
import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {
  
    return (
        <div className="hero bg-slate-200 bg-blend-screen h-96" style={{backgroundImage: 'url("bg_image.jpeg")'}}>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSearch} className="relative">
            <input type="text" name="search" placeholder="search here.." className="input text-black input-bordered w-full pr-16" /> 
            <input className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none" type="submit" value="Search" />        
            </form>
       
          </div>
        </div>
      </div>
    );
};

export default Banner;
Banner.propTypes ={
  handleSearch: PropTypes.func,
}