const argv = require('yargs').options({
    data:{
        alias:'d',
        desc:'Place where you want to know the weather',
        demand:true
    }
}).argv;

console.log(argv.data);