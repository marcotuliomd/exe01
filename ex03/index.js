const fs = require('fs');


    const archiver = require('archiver');

    var saida = fs.createWriteStream('arquivo.zip');
    var compactador = archiver('zip');

    saida.on( 'close', () => {
        console.log(compactador.pointer() +  ' bytes totais');
    } )

    compactador.pipe(saida);

    var arquivo = __dirname + '/index.js';
    compactador.append(fs.createReadStream(arquivo), {name: 'index.js'});

    compactador.finalize();

   

