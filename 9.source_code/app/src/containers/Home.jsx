/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

/**Componen to Home  */
import Main   from '../components/Home';

const Home = ({ myList , trends , originals }) => {

 // const initialState = useInitialState(API);
  return (
	<>
      <Main />
	</>
	);
}

const mapStateToProps =  state  => {
	
	return {

		myList: state.myList,
		trends: state.trends,
		originals: state.originals,
	}
};

//export default Home;

export default connect( mapStateToProps , null )(Home);

/**
 * 	<Search isHome />
		  	{myList.length > 0 &&
				<Categories title='Mi Lista'>
					<Carousel>
						{ myList.map(item =>{

								console.log('item===',myList);
								return (<CarouselItem 
											key={item.id}
											{...item}
											isList

										/>);
							}
						)}
					</Carousel>
				</Categories>
			}
			<Categories title='Tendencias'>
				<Carousel>{
					trends.map(item =>{
						
						return (<CarouselItem key={item.id} {...item} />)
					}
						
					)}
			</Carousel>
		</Categories>
		
		<Categories title="Originales de Platzi Video">
			<Carousel>
				{originals.map(item =>
					<CarouselItem key={item.id} {...item} />
				)}
			</Carousel>
		</Categories>
 */