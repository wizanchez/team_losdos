import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  	<footer id="footer" className="pb-4 pt-4">
		<div className="container-fluid">
			<div className="row text-center">
				<div className="col-12 col-lg">
					<a href="#">&copy; 2019 UberSan Technologies Inc.</a>
				</div>
				<div className="col-12 col-lg">
					<a href="#">Privacidad</a>
				</div>
				<div className="col-12 col-lg">
					<a href="#">Términos y condiciones</a>
				</div>
			</div>
		</div>
  	</footer>
);

export default Footer;

/**
 * 	<footer id="footer" class="pb-4 pt-4">
	  <div class="container-fluid">
		<div class="row text-center">
		  <div class="col-12 col-lg">
			<a href="#">&copy; 2019 UberSan Technologies Inc.</a>
		  </div>
		  <div class="col-12 col-lg">
			<a href="#">Privacidad</a>
		  </div>
		  <div class="col-12 col-lg">
			<a href="#">Términos y condiciones</a>
		  </div>
		  </div>
		</div>
	  </div>
  </footer>
  
    <footer className="footer">
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </footer>

 */