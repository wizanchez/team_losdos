import React from 'react';
import banner1 from '../../assets/static/banner1.jpg';

const Main = ({ children }) => (
	    <main id="main">
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
                                    Más seguridad, <br />
                                    mayor calidad y una <br />
                                    ciudad a tu alcance <br />
                                </div>
                            </div>
                            
                            <div className="">
                                <form>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
  );
  
  export default Main ;

  const styleMain ={

    carousel__titlebig:{
        fontSize: '2.3rem',
        fontWeight:500,
        lineHeight:'2.5rem',  
    }
  }