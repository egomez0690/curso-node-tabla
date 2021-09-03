const fs = require('fs');

const crearArchivo = async (base, listar) => {

    try {
        
        
        let fileName = `./salida/tabla-${base}.txt`;

        let salida = '';
        
        for (let index = 1; index < 11; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;            
        }
        
        if(listar){
            console.log(`Tabla del ${base}`);
            console.log("***********");
            console.log(salida);
        }
            
        fs.writeFileSync(fileName,salida);  
        
        return fileName;
    }
    catch(err) {
        throw new err;
    }
   

    /*return new Promise((resolve, reject) => {
               

        fs.access(fileName, fs.constants.F_OK, (err) => {
            (err) 
                ? reject('El archivo no pudo ser creado correctamente')
                : resolve (fileName);                
          });
    });   */
        
    //console.log(`Archivo tabla-${base}.txt creado correctamente`);
}

module.exports = {
    crearArchivo
}