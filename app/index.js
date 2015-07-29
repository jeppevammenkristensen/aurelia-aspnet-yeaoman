var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');
var projectName = require('vs_projectname');
var guid = require('uuid');

var AspNetGenerator = yeoman.generators.Base.extend({

  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
  },
  init: function() {
    this.log(yosay('Welcome to the aurelia generator.'));
    this.templatedata = {};
  },
  askForName: function() {
    var done = this.async();
    var app = '';

    var prompts = [{
      name: 'applicationName',
      message: 'What\'s the name of your ASP.NET application?',
      default: 'Tom'
    }];

    this.prompt(prompts,function(props){
      this.templatedata.namespace = projectName(props.applicationName);
      this.templatedata.applicationname = props.applicationName;
      this.applicationName = props.applicationName;
      this.templatedata.guid = guid.v4();
      this.templatedata.grunt = this.options.grunt || false;
      done();
    }.bind(this));
  },
  writing : function(){

        this.sourceRoot(path.join(__dirname, '../templates/projects/' + 'empty'));

          //this.fs.copy(this.sourceRoot() + '/../../gitignore.txt', this.applicationName + '/.gitignore');

          this.fs.copy(this.sourceRoot() + '/hosting.ini', this.applicationName + '/hosting.ini');

          this.template(this.sourceRoot() + '/Startup.cs', this.applicationName + '/Startup.cs', this.templatedata);

          this.fs.copy(this.sourceRoot() + '/*.{json,js,ts}', this.applicationName + '/');

          /// wwwroot
          this.fs.copy(this.templatePath('/wwwroot/**/*'), this.destinationPath(this.applicationName + '/wwwroot'));
  },
  end : function(){

  }
  });

module.exports = AspNetGenerator;
