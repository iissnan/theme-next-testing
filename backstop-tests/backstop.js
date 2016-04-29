'use strict';

var _ = require('lodash');
var argv = require('yargs').argv;
var shell = require('shelljs');
var Hexo = require('hexo');

var target = argv.target;
var task = argv.task;

var hexo = new Hexo(process.cwd(), {});

if ( !isTargetValid(target) ) {
    console.log(`Invalid target: ${target}`);
    process.exit(1);
}

if ( !isTaskValid(task) ) {
    console.log(`Invalid task: ${task}`);
    process.exit(1);
}

setNexTScheme();
runHexoInstance();

function isTargetValid(target) {
    return _.includes(['muse', 'mist', 'pisces'], target);
}

function isTaskValid(task) {
    return _.includes(['reference', 'test'], task);
}

function setNexTScheme () {
    hexo.on('generateBefore', function () {
        hexo.theme.config.scheme = _.capitalize(target);
    });
}

function runHexoInstance () {
    hexo.init().then(function () {
        hexo.call('clean', {}, function () {
            hexo.load().then(function () {
                hexo.call('generate', {}).then(function () {
                    capture();
                    return hexo.exit();
                }).catch(function(err){
                    return hexo.exit(err);
                });
            })
        });
    });
}

function capture () {
    shell.cd('./node_modules/backstopjs');
    shell.exec(`npm run ${task} -- --configPath=../../backstop-tests/${target}/configs.js`);
}