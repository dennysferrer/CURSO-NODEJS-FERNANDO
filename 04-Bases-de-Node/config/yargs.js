const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la multiplicación'
                    })
                    .option('l', {
                      alias: 'listar',
                      type:'boolean',
                      demandOption: false,
                      describe: 'Lista la tabla en la consola'
                    })
                    .option('h',{
                      alias:'hasta',
                      type:'number',
                      demandOption: true,
                      describe: 'Limite hasta donde llega la multiplicación'
                    })
                    .check((argv, options) => {
                      if (isNaN(argv.b)){
                        throw 'La base debe ser un número';
                      }
                      return true;
                    })
                    .argv;

module.exports = {
    argv
}