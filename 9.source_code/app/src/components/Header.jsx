import React from 'react';
import { connect } from 'react-redux';
import gravatar from '../assets/utils/gravatar';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
//import '../assets/styles/components/Header.scss';
//import logo from '../assets/static/logo-platzi-video-BW2.png';
import logoUber from '../assets/static/logo-uber.png';
import userIcon from '../assets/static/user-icon.png';

/**CSS */
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/components/Header.scss';


const Header = ( props ) =>{ 
	
	const { user } 		= props;
	//const imailIcon 	= gravatar(user.email);
	const hasUser 		= Object.keys(user).length > 0;
	const urlIcon 		= hasUser?gravatar(user.email):userIcon;
	const urlIconAlt 	= hasUser?user.email:'';

	const handelLogout = ()=>{

		props.logoutRequest({});

	};

	const lang = window.translations.messages;

	return (
		<nav id="header"  className="navbar ubersan-color navbar-expand-lg sticky-top">
			<div className="container" >
		  		<a className="navbar-brand" href="#">
					<img src={logoUber} alt="UberSan logo" />
		  		</a>
		  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
		  		</button>
  
		  		<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav ml-auto">
			  			<li className="nav-item">
							<a className="nav-link" href="#driver">{ lang['CONDUCTOR'] }</a>
			  			</li>
			  			<li className="nav-item">
							<a className="nav-link" href="#passenger">{ lang['PASAJERO']}</a>
			  			</li>
			  			<li className="nav-item">
							<a className="nav-link" href="#">{ lang['INICIA SESIÓN']}</a>
			  			</li>
					</ul>
		  		</div>
			</div>
	  	</nav>
	  );

}

//export default Header;
const mapStateToProps = state =>{
	return {
		user:state.user
	}
}
const mapDispachtToProps = {

	logoutRequest,

}

export default connect( mapStateToProps, mapDispachtToProps )( Header );


const styleHeader = {
	header:{
		backgroundColor: '#0699cd',
	}
	,header__container:{
		height: '100%',
	}
	,header__imglogo:{
		width:'125px',
	}
}


/**
 * #header .nav-link{
    color: whitesmoke !important;
    margin-left: 10px;
}

#header .nav-link:hover{
    text-decoration: underline;
}

#header img{
    width: 125px;
}

 */

/**
 * <header className="header">
			<Link to="/" >
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
			<div className="header__menu--profile">
				
				<img src={urlIcon} alt={urlIconAlt} />
				
				<p>Perfil</p>
			</div>
			<ul>
				<li>Cuenta</li>
				{ 
					hasUser?
						<li><a href="/">{user.name}</a></li>
					:
						null
				}
				
				{ 
					hasUser?
						<li><a href="#loggout" onClick={ handelLogout }>Cerrar Sesión</a></li>
					:
						<li><Link to="/login">Iniciar Sesión</Link></li>
				}
				
				
			</ul>
			</div>
		</header>
 */