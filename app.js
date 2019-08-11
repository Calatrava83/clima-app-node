const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;
const colors = require('colors');



// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${colors.blue(coords.direccion)} es de ${colors.blue(temp)} ºC.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${colors.red(direccion)}.`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)