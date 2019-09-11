# TEAM Los 2s @team_losdos

project Uber a realizar con reactjs como frontend, express y un framework a definir como backend, y React native para realizar una app tanto en `android` como para `IOS`.

## Team

- Ivan Sanchez @xxxxxxxxx, developer Fullstack
- Luis Sanchez @wizanchez, developer Fullstack

## Pasos

- hostory
- mokups
- maquetacion
- definir el MpV
- modelo MER (definicion DB engine)
- definicion Arquitectura de Folder
- Patron de Disenho
- Definir componentes reutilizables
- realizar maquetacion en en reactjs
- realizar los APIREST para cada servicio
- tareas a trabajar

## Herramientas

- **sketch:** para realizar los mockups
- **vscode:** herramienta de desarrollo

## Tips

- generate key

```bash
ssh-kygen -t rsa -b 4069 -C "NAME_KEY"
```

- For default save in `/var/root/.ssh/id_rsa`

```bash
ls -l
 -rw-------  1 root  wheel  3306 Sep  8 08:59 id_rsa
 -rw-r--r--  1 root  wheel   727 Sep  8 08:59 id_rsa.pub
```

## Instalacion SASS 

- Instalar paquete sass 
```bash
npm install -g sass
```

- Para poder visualizar tus proyectos de sass en el navegador, debes escribir en tu consola
```bash
sass --watch DF_NOMBRE_RUTA/initial/styles.scss DF_NOMBRE_RUTA/initial/styles.css
```

## Fundamentos JavaScript

- Algunas funciones
```javascript
var.toUpperCase(); # Pasar a Mayusuculas
var.toLowerCase(); # Pasar a Minuscula
var.charAt(0); # Traer la primera letra del nombre
var.length(); # count del string
`${var1} ${var2.toUpperCase()}` # Interpolar o concatenar, lo mismo que var1 + ' ' + var2
var.substr( 1 , 4 ); # hacer un substring
debugger # Hacer debug desde la consola del  navegador 
{} #indica Objetos
[] # indica Array
miFuncion = varget => varget +1 # forma de funcion llamada Arrows functions
var miVar = MyArray.filter( funcionDefiltro ) # para filtrar un array 
var miVar = MyArray.filter( function ( this ){  return this.altura >=1.8 } ) # otra forma de filtrar
var miVar = persona.map(( persona ) => { return { ... persona , altura +=22};}); # mapiar un arreglo
``` 

- ejemplo reduce
```javascript
# Forma 1
var acum = 0;
for ( var i = 0 ; personas.lenght ; i++ ){

	acum = acum + personas[ i ].cantidadDeLibros
}

# Forma 2
var acum = 0;
var totalLibro = personas.reduce( reducer , 0 );

const reducer = ( acum , { cantidadDeLibros } ) => acum + persona.cantidadDeLibros;
```

- definir prototypes JS 
```javascript
function Persona( nombre , apellido ){

	this.nombre   = nombre;
	this.apellido = apellido;
	this.edad = 37;

	console.log('se ejecuto la funcion =' );
}

Persona.prototype.saludar = function (){

	console.log(`hola me llamo ${this.nombre} y la edad ${ this.edad }`);
}

var sacha = new Persona( 'sacha Fer' , 'sanchez');

sacha.saludar();
```

- Portotypes heredadas
```javascript
function HeredaDe( prototipoHijo , prototipoPadre ){

	var fn                  = function (){}
	fn.prototype            = prototipoPadre.prototype;
	prototipoHijo.prototype = new fn;

		prototipoHijo.prototype.constructor = prototipoHijo;
}

/**
 * function and constructor
 */
function Desarrollador( nombre , apellido){

	this.nombre   = nombre;
	this.apellido = apellido;

}

Desarrollador.prototype.saludar =  function (){

	console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido }`);
}

/**
 * function and constructor
 */	
function Persona( nombre , apellido ){

	this.nombre   = nombre;
	this.apellido = apellido;
	this.edad = 37;

	console.log('se ejecuto la funcion =' );
}

Persona.prototype.saludar = function (){

	console.log(`hola me llamo ${this.nombre} y la edad ${ this.edad }`);
}

HeredaDe( Desarrollador , Persona );
var sacha = new Persona( 'sacha Fer' , 'sanchez');
sacha.saludar();
```

- Forma mas sencilla de hacer herencia con ECMASCRIPT
```javascript
class Persona{

	constructor( nombre , apellido ){

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =' );

	};

	saludar(){

		console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido }`);
	};

}

class Desarrollador extends Persona{

	constructor( nombre , apellido ){
		
		super( nombre , apellido);

		this.nombre   = nombre;
		this.apellido = apellido;
		this.edad     = 37;

		console.log('se ejecuto la funcion =Desarrollador' );

	};

	saludar(){

		console.log(`hola me llamo ${this.nombre} y el apellido ${ this.apellido } desde el desarrollador`);
	};


}
```

## References

URLs references:

- [ssh: connect to host github.com](http://www.inanzzz.com/index.php/post/wa1f/solution-for-ssh-connect-to-host-github-com-port-22-connection-timed-out-error)
- [10 herramientas imprescindibles para crear mockups](https://www.creativosonline.org/blog/10-herramientas-imprescindibles-para-crear-mockups.html)
- [instalacion SASS preprocesador ](https://github.com/teffcode/sass-workshop)
