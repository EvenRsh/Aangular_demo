var angular = require("angular");//angular.js
var app = angular.module('myApp',[]);
var indexCtrl = require("./controller/indexCtrl.js");
require('./css/index.css');
indexCtrl(app);
console.log(app)