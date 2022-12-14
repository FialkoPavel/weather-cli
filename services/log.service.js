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
       -s [CITY] to set tht CITY
       -h to show help
       -t [API_KEY] for saving token
       `
    );
};


export { logSuccess, logError, logHelper }