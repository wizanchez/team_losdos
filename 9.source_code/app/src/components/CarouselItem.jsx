import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import deleIcon from '../assets/static/delete-icon.png';

const CarouselItem = ( props ) => {

	const { isList, id, cover, title, year, contentRating, duration } = props;

	const handleSetFavorite = () => {

		console.log('send Item ' , id);
		
		props.setFavorite({
				id,
				cover, 
				title, 
				year, 
				contentRating, 
				duration
			});
	}

	const handelDeleteFavorite = ( itemID )=>{
		console.log('mydelete is', itemID);
		props.deleteFavorite( itemID );

	};

	return (
		<div className="carousel-item">
			<img className="carousel-item__img" src={cover} alt={title}  />
			<div className="carousel-item__details">
			<div>
			<Link to={`./Player/${id}`} >
				<img 
					className="carousel-item__details--img" 
					src={playIcon} 
					alt="Play Icon"	
				/>
			</Link>
				{
					isList?
						<img 
							className="carousel-item__details--img" 
							src={deleIcon} 
							alt="Delete Icon" 
							onClick={()=>handelDeleteFavorite(id)}
						/>
					:
						<img 
							className="carousel-item__details--img" 
							src={plusIcon} 
							alt="Plus Icon" 
							onClick={handleSetFavorite }
						/>
				}
				
				
			</div>
			<p className="carousel-item__details--title">{title}</p>
			<p className="carousel-item__details--subtitle">
				{`${year} ${contentRating} ${duration}`}
			</p>
		</div>
		</div>
	);

}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect( null, mapDispatchToProps )( CarouselItem );