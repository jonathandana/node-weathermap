let {getPlaceLatLng} = require('./place/place');
    let {getWeathermap} = require('./weathermap/weathermap');
const colors = require('colors');


const argv = require('yargs')
                .options({
                    direction:{
                        alias:'d',
                        desc:'direction of the city to get the weather',
                        demand:true
                    }
                }).argv;


const getInfo = async (place) =>{

    try {
        const infoPlace  = await getPlaceLatLng(place);
        const weathermap = await getWeathermap(infoPlace.lat,infoPlace.lng);

        return `weathermap to ${infoPlace.name} is: ${weathermap}`;

    }catch (e) {
        return e.message;
    }



};

getInfo(argv.direction)
    .then((resp)=>{
       console.log(colors.green(resp));
    })
    .catch((resp)=>{
        console.log(colors.red(resp));
    });



