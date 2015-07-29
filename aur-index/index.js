'use strict';
var util = require('util');
var ScriptBase = require('../script-base-basic.js');
var path = require('path');

var Generator = module.exports = function Generator() {
	ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);


Generator.prototype.createItem = function(){
    this.generateStandardFile('aurelia-index.html',file);
};
