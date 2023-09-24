import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({card}) => {
    const{id, image, title, category, category_color, card_color, text_color} = card;
    return (
        <Link to={`/card/${id}`}>
            <div className='card shadow-xl hover:cursor-pointer' style={{backgroundColor:`${card_color}`, color: `${text_color}`}}>
        <figure className='h-full w-full'><img className='h-full w-full' src={image} alt="charity" /></figure>
        
        <div className='p-4'>
        <p><span className='text-sm  px-2 rounded-xl' style={{backgroundColor:`${category_color}`}}>{category}</span></p>
          <h2 className="card-title">{title}</h2>
          
        </div>
      </div>
        </Link>
    );
};

export default Card;
Card.propTypes ={
    card: PropTypes.object,
}