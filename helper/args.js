
const getArgs = (args) => {
    const res = {};
    const [execution, file, ...rest] = args;
    rest.forEach((element, i, array) => {
        if(element.charAt() === '-') {
            if(i === array.length-1) {
                res[element.substring(1)] = true;
            } else if(array[i + 1].charAt() !== '-') {
                res[element.substring(1)] = array[i + 1];
            } else {
                res[element.substring(1)] = true;
            } 
        }
    });
    return res;
};


export { getArgs };