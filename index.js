// const express = require('express');
// const app = express();
// const port = 8080;
// const {personaRoute} = require('./routes/personas');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use((_, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// personaRoute(app);

// app.get('*', function (req, res) {
//     res.send('404 Page not found')
// })

// app.listen(port, () => {
//     console.log(`Sever Online`)
// })

// module.exports = {
//     app
// }



require('dotenv').config()

const Searches = require("./models/searches");

const main = async () => {

    const searches = new Searches();
    
    const termino = 'petrogustavo';
    //Busca el id con la funcion userID en la clase searches.
    const userID = await searches.userID(termino);
    //Busca los twits del usuario con el id del usuario.
    const twits = await searches.twits(userID[0].id);

    console.log(twits);
}

main();