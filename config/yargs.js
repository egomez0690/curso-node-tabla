const argv = require('yargs').
                options({
                    'b': 
                    {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l':
                    {
                        alias: 'listar',
                        type: 'boolean',
                        describe: 'muestra la tabla en consola',
                        default: false
                    },
                })
                .check((argv, options) => {
                    //console.log('yargs', argv);
                    if(isNaN(argv.b))
                        throw 'La base debe ser un número';
                    return true;
                })
                .argv;

module.exports = argv;                