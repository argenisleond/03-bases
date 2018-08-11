const { argv } = require('./configs/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

//console.log(argv._[0]);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ` + colors.green(`${ archivo }`));
        }).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log('Comando no reconocido');

}

//let parametro = argv[2];
//let base = parametro.split("=")[1];

//console.log(argv.base);
//console.log(argv.limite);