const axios = require('axios');

const getWeathermap = async (lat,lng)=>{

    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e60f81413be37bbb98b97267f1bff4fe&units=metric`);

    return res.data.main.temp;
};



module.exports = {
    getWeathermap
};