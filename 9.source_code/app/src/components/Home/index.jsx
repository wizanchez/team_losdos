import React from 'react';
import banner1 from '../../assets/static/banner1.jpg';
import '../../assets/styles/components/Home.scss';
//import Register from '../../containers/Register';

export const Main = ({ lang }) => (
	    <main id="main">
            <div>
                <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={banner1} alt="Banner 1" />
                    </div>
                </div>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-center text-md-left">
                                <div className="d-none d-md-block" style={ styleMain.carousel__titlebig }>
                                    { lang['Más seguridad, \n mayor calidad y una \nciudad a tu alcance \n']}
                                </div>
                            </div>
                            
                            <RegisterForm />

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
  );

export const MainDescription = ({ lang }) =>(

    <div className="row">
        <div className="col text-left">
            <h2>{ lang['Conduce con la app cuando quieras'] }</h2>
            <p className="mt-3 mb-4" style={ styleMain.MainDescription__sutitle } >{ lang['Genera las ganancias que quieras Just to want it And not to need it Makes me let it fall But then you let me in And I dont want it But you made me believe it So do I really? Do I really want?']}</p>
        </div>
    </div>
);


export const MainBox = ({ title , descrip ,img }) =>(

    <div className="col-12 col-md-6">
        <div className="card">
            <img src={img} style={ styleMain.MainBox__img } alt="Mejor calidad" />
            <div className="card-body">
            <h5 className="card-title">{ title }</h5>                
            <p className="card-text">{ descrip }</p>
        </div>
    </div>
  </div>

);

export const RegisterForm = () => (
    <div className="contact-form">
        <form>
            <h2 className="contact-form__title">Registrate ahora</h2>
            <input type="text" className="contact-form__input" placeholder="Correo electrónico" />
            <input type="text" className="contact-form__input" placeholder="Nombre" />
            <input type="text" className="contact-form__input" placeholder="Apellido" />
            <input type="text" className="contact-form__input" placeholder="Movil" />
            <input type="text" className="contact-form__input" placeholder="Contraseña" />
            <input type="text" className="contact-form__input" placeholder="Ciudad" />
            <input type="text" className="contact-form__input" placeholder="Bono Promocional" />
            <button className="contact-form__button">Registrarse</button>
        </form>
    </div>
)

const styleMain ={

    carousel__titlebig:{
        fontSize: '2.3rem',
        fontWeight:500,
        lineHeight:'2.5rem',  
    }
    ,MainDescription__sutitle:{

        fontSize: '1.3rem',
        fontWeight: 400
    }
    ,MainBox__img:{
        width: '70px',
        display: 'block',
        margin: '7px auto'
    }

}