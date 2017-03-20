var a = 1;
var b = 2

function callback(callback) {
	setTimeout(function() {
		//b = 3
		callback(3)
		//console.log(3)
	}, 1000)
}
callback(function(data){
	b = data
	console.log(b)
});

callback(function(data){
	a = b = data;
	console.log(a);
	
});
console.log(b) //2
//
$http.get().success(function(){
	
})
