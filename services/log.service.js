import chalk from 'chalk'; 
import dedent from 'dedent-js';

const logSuccess = (log) => {
    console.log(chalk.bgGreen(' SUCCESS ') + log);
};

const logError = (log) => {
    console.log(chalk.bgRed(' ERROR ') + log);
};

const logHelper = () => {
    console.log(
       dedent`${chalk.bgCyan(' HELPER ')}
       Without parameters - weather output
       -s [CITY] to set city
       -h to show help
       -t [API_KEY] for saving token
       `
    );
};

const logWeather = (res) => {
    console.log(
        dedent`${chalk.bgYellowBright(' WEATHER ')} City: ${res.name}
        Description: ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
        Humidity: ${res.main.humidity}
        `
     );
}


export { logSuccess, logError, logHelper, logWeather }