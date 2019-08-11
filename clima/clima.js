const axios = require('axios');


const getClima = async(lat, lng) => {
    // const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=32f843d833c38373032f825c4a92418a&units=metric`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d741503d7860305cf0117b99e1ae896f&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}