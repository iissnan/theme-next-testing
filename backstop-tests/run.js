var shell = require('shelljs');
var argv = require('yargs').argv;

var command = process.platform === 'win32' ?
    `start http-server -a localhost -p 4000 && start node backstop-tests/backstop --target=${argv.target} --task=${argv.task}` :
    `http-server -a localhost -p 4000 & node backstop-tests/backstop --target=${argv.target} --task=${argv.task}`;

shell.exec(command);