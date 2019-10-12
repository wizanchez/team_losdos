import React ,{ useState, } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import '../assets/styles/components/Register.scss';

const Register = ( props ) =>{

    const [ form , setValue ] = useState({
        email:'',
        name:'',
        password:''

    });

    const handleInput = event =>{

        setValue({
            ...form,
            [ event.target.name ] : event.target.value
        });
    }

    const handleSubmit = event =>{

        event.preventDefault();
        
        props.registerRequest( form );
        
        props.history.push('/');
    }

    return (

        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={ handleSubmit }>
                    <input 
                        name='name' 
                        onChange={ handleInput} 
                        className="input" 
                        type="text" 
                        placeholder="Nombre"     
                    />
                    <input 
                        name='email' 
                        onChange={ handleInput}
                        className="input" 
                        type="text" 
                        placeholder="Correo" 
                    />
                    <input 
                        name='password' 
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                    />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    );
}

const mapDespatchToProps = {

    registerRequest,
}

export default connect( null, mapDespatchToProps )(Register);