import https from 'https';
import { getValue } from './storage.service.js'
import { TOKEN_DICTIONARY } from '../weather.js';
import axios from 'axios';

const getData = async (city) => {
    const key = await getValue(TOKEN_DICTIONARY.token);
    console.log('key', key, typeof key, key.length);
    if(!key) {
        throw new Error('You need to set an API key, set it via command -t [API_KEY');
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');

   const { data } = await axios.get(url, {
        params: {
            q: city,
            appid: key
        }
    });

    
    return data;

};

export { getData };