const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

function init () {
    if (cluster.isMaster) {

        console.log(`Total Number of CPU Counts is ${totalCPUs}`);
    
        for (var i = 0; i < totalCPUs; i++) {
            cluster.fork();
        }
        cluster.on("online", worker => {
            console.log(`Worker Id is ${worker.id} and PID is ${worker.process.pid}`);
        });
        cluster.on("exit", worker => {
            console.log(`Worker Id ${worker.id} and PID is ${worker.process.pid} is offline`);
            console.log("Let's fork new worker!");
            cluster.fork();
        });
    }
}


module.exports = {
    init,
    isMaster: cluster.isMaster
}