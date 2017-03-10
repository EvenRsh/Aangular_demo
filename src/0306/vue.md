### 1.安装vue.js

1.网上下载

2.npm install vue(默认下载2.0版本)

优点：相比angular，vue源码比较轻，所以它是轻量级的，它比angular性能更好点

缺点：没有angular功能齐全,比如，angular封装ajax（$http）

### 2.在项目中引入vue.js
```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
	</body>
	<script src="js/vue.js"></script>
</html>
```

### 3.new Vue()
往Vue构造器传一个对象，这个对象有el属性和data属性
el:节点 相当于angular控制器，如果el:'#demo',就控制所有标签上带有id="demo"的范围
data:你要往html结构（视图）绑定的数据
```
var app = new Vue({
			el:'#demo',//element 元素
			//$scope
			data:{
				name:'xie'
			}
		})
```

### 4.表达式{{}}
表达式支持渲染各种类型的数据，里面支持算术运算，字符串拼接和三元表达式

### 5.绑定函数
在构造器的对象里面增加一个methods属性，传对象进去
```
var app = new Vue({
			el:'#demo',//element 元素
			//$scope
			data:{
				name:'xie',
				obj:{
					a:'yi',
					b:'yao'
				},
				arr:['a','b','c'],
				number:8,
				bool:false
			},
			methods:{
				test:function(){
					console.log('test')
				}
			}
		})
```

### 6.双向数据绑定
```
<input v-model="name">
<p>{{name}}</p>
```
