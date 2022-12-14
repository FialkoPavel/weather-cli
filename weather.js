import { getArgs } from "./helper/args.js";
import { logSuccess, logError, logHelper, logWeather } from "./services/log.service.js";
import { saveKeyValue } from './services/storage.service.js';
import { getData } from './services/api.service.js';

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
};

const saveToken = async (token) => {
    if(!token.length) {
        logError('No token');
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        logSuccess('Token saved');
    } catch(e) {
        logError(e.message);
    }
}

const saveCity = async(city) => {
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        logSuccess('City saved');
    } catch(e) {
        logError(e.message);
    }
}

const getForecast = async() => {
    try {       
        const data = await getData();
        logWeather(data)
        return data;
    } catch(e) {
        if(e?.response?.status === 401) {
            logError('Not correct token');
        } else if (e?.response?.status === 404) {
            logError('Not correct city');
        } else {
            logError(e.message)
        }
    }
    
}

const main = async() => {

    const args = getArgs(process.argv);
    if(args.s) {
        await saveCity(args.s)
    }
    if(args.h) {
      
    }
    if(args.t) {
        await saveToken(args.t);
    }
    await getForecast();
};

main();

export { TOKEN_DICTIONARY };