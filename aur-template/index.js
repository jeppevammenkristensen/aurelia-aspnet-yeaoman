'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');
var changeCase = require('change-case');


var NamedGenerator = module.exports = function NamedGenerator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(NamedGenerator, ScriptBase);

NamedGenerator.prototype.createNamedItem = function() {
  var pasc = changeCase.pascalCase(this.name);
	var lower = changeCase.lowerCase(this.name);

	this.generateTemplateFile('projects/template/index.template',
        this.name + '/index.js', { name : this.name}
  );

	this.generateStandardFile(
    'projects/template/template.template',
    'templates/' + this.name + '.template'
  );
};
