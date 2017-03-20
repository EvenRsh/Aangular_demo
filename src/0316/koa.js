var koa = require('koa');
var router = require('koa-router');
var app = new koa();
app.use(router(app));
app.get('/users/:id', function *(next) {
  //var user = yield User.findOne(this.params.id);
  //this.body = user;
  console.log(this.params.id)
});
/*app.use(function*() {
	this.body = 'Hello World';
});*/

app.listen(3000);