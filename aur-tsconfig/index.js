'use strict';
var util = require('util');
var ScriptBase = require('../script-base-basic.js');
var extension = "template";


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createNamedItem = function() {

	this.generateStandardFile('./projects/empty/tsconfig.json', 'tsconfig.json'
  );
};
