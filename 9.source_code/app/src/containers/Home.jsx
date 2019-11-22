/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

import imgCalidad from '../assets/static/imgCalidad.png';
import imgGeolica from '../assets/static/imgGeolica.png';

/**Componen to Home  */
import { 
	Main ,
	MainDescription,
	MainBox }   from '../components/Home';
 

const Home = ({ myList , trends , originals }) => {

	const lang = window.translations.messages;

	const boxInfo =[
		{
			title:'Conductores de calidad',
			descrip:'Tenemos el proceso de registro de conductores más riguroso del mercado, para que viajes siempre con los mejores',
			img:imgCalidad
		}
		,{
			title:'Viajes geolocalizados',
			descrip:'Cada viaje está geolocalizado y puedes compartir tu viaje con tus amigos o familiares para que sepan dónde estás',
			img:imgGeolica
		}
	];
	
	// const initialState = useInitialState(API);
	return (
		<>
			<Main lang={ lang } />
			<section className="mt-4">
				<div className="container">
					<MainDescription lang={ lang } />
					<div className="row mb-5">
						{
							boxInfo.map(( item )=><MainBox { ...item } />)
						}
						
					</div> 
				</div>
			</section>
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