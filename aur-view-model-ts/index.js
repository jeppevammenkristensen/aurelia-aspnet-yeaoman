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

	this.generateStandardFile('aurelia-view.html',
    lower + '.html'
  );

	this.generateTemplateFile(
    'aurelia-viewmodel-typescript.tstemplate',
    lower + '.ts', { viewName : pasc }
  );
};
