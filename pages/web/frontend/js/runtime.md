# 以Runtime重新认知JavaScript

## JavaScript语言的执行方式

解释型语言 --> 解释器

GO 编译型

## JS Runtime

- browser
- nodejs
- deno
- bun

## 如何去执行一句代码

### Browser

控制台里面直接输入代码

### Nodejs

进入到node环境，直接输入代码

## 如何去执行单个js代码文件

### Nodejs

``` shell
node index.js
```

### Browser
通过HTML的一个标签 script 去引入js文件

## 在Runtime基础上，划分js为三部分
- ECMAscript
- 内置的API
	- Browser APIs
		- DOM API
		- BOM API
	- Nodejs APIs
		- fs模块
		- http模块
		- path模块
- 外置的API、外部库
	- axios
	- lodash
	- jquery
