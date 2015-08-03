'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var changeCase = require('change-case');
var extension = "ts";

var NamedGenerator = module.exports = function NamedGenerator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(NamedGenerator, ScriptBase);

NamedGenerator.prototype.createNamedItem = function() {
  var lowerName = changeCase.lowerCase(this.name);
  var destination = lowerName + "." + "ts";
  this.log(lowerName);
	this.generateTemplateFile(
    'aur-service.template', destination, { serviceName : this.name }
  );
};
