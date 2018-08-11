const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject(`El valor introducido ${base} no es un número`);
        return;
    }

    console.log("==========================".green);
    console.log(colors.green(`Tabla del ${base}`));
    console.log("==========================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(colors.red(`${base}`) +
            colors.blue(`*${i}`) +
            colors.yellow(` = ${base*i}`));
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}