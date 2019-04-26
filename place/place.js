const axios = require('axios');

const getPlaceLatLng = async (place)=>{

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(place)}`,
        timeout: 1000,
        headers: {'X-RapidAPI-Key': '4e6c395bf6mshe94600f34085aa9p123b5cjsn8428ce5336bd'}
    });



    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`Place not found (${place})`);
    }

    const data  = resp.data.Results[0];
    const name  = data.name;
    const lat   = data.lat;
    const lng   = data.lon;

    return{
        name,
        lat,
        lng
    }

};

module.exports = {
    getPlaceLatLng
};

