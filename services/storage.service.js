import { json } from 'express';
import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-json.js');

const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    } 

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));

};

const getValue = async (key) => {
    let data;
    if (await isExist(filePath)) {
       const file = await promises.readFile(filePath);
       data = JSON.parse(file)[key];
    }
    return data;
}

const isExist = async (filePath) => {
    try {
        await promises.stat(filePath);
        return true;
    } catch(e) {
        return false;
    }
};


export { saveKeyValue, getValue };

