import React,{ useState, } from "react";
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import { connect } from 'react-redux';
//import { loginRequest } from '../actions';

const Login = ( props ) =>{
    
    // const [ form , setValue ] = useState({
    //     email:'',

    // });
    
    // const handleInput = event =>{

    //     setValue({
    //         ...form,
    //         [event.target.name]: event.target.value
    //     })
    // };

    // const handleSubmit = event =>{

    //     event.preventDefault();
    //     console.log( form );
    //     props.loginRequest(form);
    //     props.history.push('/');
    // };

    return (
    <section className="contact-login container-fluid" >
        <div className="row">
            <form className="col-md-4 offset-md-4  mt-5">
                <h2 className="mt-3 contact-login__title">Iniciar sesión</h2>
                <input type="text" className="mt-3 contact-login__input" placeholder="Correo electrónico" />
                <input type="text" className="mt-3 contact-login__input" placeholder="Password" />
                <button className="mt-3 w-100  contact-login__button">Ingresar</button>
            </form>
        </div>        
    </section>

    )
};



// const mapDespatchToProps = {

//    // loginRequest,
// }

//export default connect(null, mapDespatchToProps)(Login);
export default connect(null, null)(Login);