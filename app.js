const argv = require('./config/yargs'); //Acá no uso desestructuración
const {crearArchivo} = require('./helpers/multiplicar')


console.clear();

//console.log(process.argv);
console.log(argv);

//const base = 3;

crearArchivo(argv.b, argv.l)
    .then(nombre => console.log('El archivo ', nombre, ' fue creado exitosmente'))
    .catch(err => console.log(err));
