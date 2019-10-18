## React con Redux
- Clonamos el proyecto
```bash
git clone https://github.com/platzi/PlatziVideo.git
```
- Instalamos npm
```bash
npm install
```

- Instalamos router
```bash
npm install react-router-dom --save
```

- Iniciamos nuestro proyecto
```bash
npm start
# normalmente esta en localhost:8080
```

- Iniciamos nuestro server Fake
```bash
json-server initialState.json
# o tambien
    npm run server
    # si esta configurado en el script
```

- Ahora modificamos los webpack ```webpack.config.js```

```javascript
 },
  devServer:{

    historyApiFallback:true,
  },
  plugin
```

- Trabajando con Redux

```bash
npm install redux react-redux --Save
```
- Redux, contiene toda la logica que va a contener


- Instalamos md5
```bash
npm install md5 --save
```