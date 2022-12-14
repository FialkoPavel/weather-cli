import { getArgs } from "./helper/args.js";
import { logSuccess, logError, logHelper } from "./services/log.service.js";
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

const main = () => {
    const args = getArgs(process.argv);
    if(args.s) {
        logSuccess(args.s)
    }
    if(args.h) {

    }
    if(args.t) {
        saveToken(args.t);
    }
    getData('minsk');
};

main();

export { TOKEN_DICTIONARY };