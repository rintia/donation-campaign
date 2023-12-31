import PropTypes from 'prop-types';
const MyDonation = ({myDonation}) => {
    const{title, category, image, text_color, category_color, card_color, price} = myDonation;
    return (
        <div className="card md:card-side h-full shadow-xl" style={{backgroundColor: `${card_color}`}} >
        <figure className='md:w-2/5'><img className='h-full object-cover w-full' src={image} alt="Movie"/></figure>
        <div className="card-body">
            <h1 style={{color:`${text_color}`}} className='text-sm pt-0 mt-0'><span style={{backgroundColor: `${category_color}`}} className='px-2 rounded-xl'>{category}</span></h1>
          <h2 className="card-title font-bold">{title}</h2>
          <p style={{color: `${text_color}`}} className='font-semibold'>${price}</p>
          <div className="card-actions">
            <button style={{backgroundColor: `${text_color}`}} className="btn btn-primary border-none">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default MyDonation;

MyDonation.propTypes ={
    myDonation: PropTypes.object,
}