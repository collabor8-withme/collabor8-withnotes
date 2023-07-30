
## 

比如假设我现在有一家企业 想为我的企业做一个网站 
1. 我提出了这个要创网站的需求
2. 产品经理根据我的需求设计了项目原型
3. 再通过UI设计师设计出漂亮的界面，形成UI设计图
4. 前端开发者根据UI设计图来通过前端技术(html css js等)来 把UI设计图通过代码实现成网页(所以前端开发者又被亲切的叫做”切图崽”)
    后端开发者来实现一些数据的业务逻辑，并且可能同时还要兼顾数据库的设计。(所以后端开发者又被亲切的叫做”就是搞CRUD的”)
   数据库设计管理也可能由专门的人员负责
5. 前端开发者和后端开发者要一起定义接口规范(后面开发过程中，前后端扯皮吵架的一大重点)
6. 测试人员完成对代码的测试
7. 运维人员部署项目
8. 项目上线

http://localhost:8080/test

JSON

```json
{
	"name": "shuhso",
	"age": 12,
	"addr": "hunan",
	"QQ": "qq"
}
```


前后端不分离的时代     服务端渲染      多页面MPA
https://www.baaaaa.com

index.html
apple.html


前后端分离      客户端渲染      单页面       的网站 
https://www.baaaaa.com

index.html

执行js脚本     ---》 发起AJAX异步请求   ---》 从后端拿数据（JSON格式的数据）
- XHR
- fetch
- Axios

把JSON格式的数据变成  --》   JS对象     ---〉DOM API挂载到页面上 --》浏览器渲染出来
```
document.qs("#app").innerHTML = person.name
```



## 
然后 就是说 一个网站的发展历史是什么样的

---最开始 就是静态内容网页
什么是静态网页呢？
静态网页就是数据或者说展示的东西就是固定的，每个人访问这个网站看到的都是一样的东西，这些展示的东西，都是写死在了HTML的标签内容里面

--- 后来，动态内容网页出现，那么同时还处于前后端不分离的开发时代
1. 什么是动态网页呢？
动态网页就是数据或者说展示的东西就是不固定的，这些展示的数据，就不是写死在了HTML的标签内容里，而是通过一种模板引擎，或者一些变量，来控制里面的内容。

2. 前后端不分离
因为还没有AJAX这一类的技术出现，所以要实现这种数据可以被替换，而不是写死在HTML里，那么，只能靠在服务端实现，类比于JSP、PHP这种技术，就是说把数据放到页面上的过程，最终是在服务端实现的。这里就有一个概念，叫做服务端渲染。

--- 服务端渲染 客户端渲染

--- 再后来，AJAX出现。前后端分离的时代到来
什么是AJAX，以及前后端分离？
AJAX可以理解成一种规范，全称Asynchronous JavaScript And XML，AJAX的出现，是为了实现我们网页的部分更新，同时是在这个时候我们的前后端的数据通信，是通过XML实现的，而不是现在的JSON。

前后端分离就是说，现在界面依然是动态网页，但是数据不是在服务器端渲染上去的，而是通过AJAX拿到服务端的数据，并且数据的传输格式是XML（或者现在的JSON），再在客户端（浏览器之类的）渲染上去的。

--- MPA SPA 那么还有多页面 单页面的概念

## 网站发展
### 静态内容网页
不会变的，内容写死在html里面

### 动态内容网页
#### 前后端不分离 服务端渲染
会变的，内容根据情况而言

#### AJAX出现 前后端分离 客户端渲染
不要把AJAX理解为一项具体的技术，而是当成一种规范来看待
Asynchronous JavaScript And XML
通过JavaScript的异步操作 和 XML格式的文件 来实现前后端的数据传输

实现AJAX这种规范的技术有很多
- XHR      XMLHttpRequest对象的简称
- $.ajax()          JQuery这个库的AJAX实现   XMLHttpRequest的封装
- axios             axios这个库就是对XMLHttpRequest对象的封装、基于Promise
- fetch            基于Promise的异步请求模块 

后端使用java的Web框架写的 Java对象
Asynchronous JavaScript And XML

Asynchronous JavaScript And JSON
XML数据格式 
- 缺点： 麻烦
``` xml
<person>
	<name>shuhao</name>
	<age>12</age>
</person>
```

JSON数据格式
``` json
{
	"person": {
		"name": shuhao,
		"age": 12
	}
}
```

前端是用js js对象


#### MPA multi Page application
每一个页面都有一个单独的HTML文件

#### SPA single Page Application
路由机制 

网站有很多界面
- 多个html
- 单独一个html + 路由机制


## 服务器
就是一台电脑，安装服务器软件之后，启动某一项服务，他就可以被称为服务器。
- Tomcat
- Apache
- Nginx

### 一般服务器会安装的OS 操作系统
服务器一般不会用MacOS Windows 因为他们两个有图形化界面
图形化界面 很吃资源 

linux 一般没有图形化操作界面
windows server

### 服务器软件会干嘛
启动这个服务器软件之后，他会在这台电脑上，启动一个进程，这个进程会跑在一个端口上

127.0.0.1   ===   localhost   这个ip 是指向自己电脑

8080

127.0.0.1:8080/index.html

### 总结
服务器
- 一台电脑
- 安装linux系统
- 安装服务器软件

### web服务器
- 一台电脑
- 安装linux系统
- 安装服务器软件 --- web服务器软件

### 服务端
这台电脑上
- 启动了一个服务器软件Tomcat
- Tomcat服务器软件开起了一个进程 
- 这个进程监听了8080端口 http tcp

http://localhost:8080/demo/test

### 跨域
http://localhost:8080/demo/test

http://192.168.1.1:8080
URL 


## 网络
什么是网络？
网络 = 节点 + 链路
节点你可以理解为 电脑
链路你可以理解为 网线

## 互联网
一个 又 一个的网络通过链路（网线）连在一起 就是互联网

## 因特网
是世界上最大的互联网

### 万维网 World Wide Web （就是www）
是因特网中的一个服务，你访问的www.baidu.com 
www就是代表他是一个Web服务

万维网又有三个重要的东西
- HTML       用来保存内容
- URL           用来定位这个内容在哪里
- HTTP         传输这个内容的协议


git github pr issue git团队开发

项目


html  css

js dom 2个月

js 基础语法

事件循环
浏览器渲染原理
异步编程

节省时间 crash course

需求分析

Web开发  提供Web服务 万维网服务 通过在一台电脑上安装 Web服务器软件 来提供Web服务 让你访问超文本文档（HTML URL HTTP）
原型设计 产品经理       蓝湖
UI设计师 网页设计图       figma
定义接口规范       接口文档
并发  电商秒杀        1亿      javaEE          Tomcat、netty、undertown 
前端 html css  js       Vue React Svelte Solid  切图仔
后端  java Spirng   SpringBoot       生态好         go     Gin       Web框架          
CRUD
读源码
增删改查
Full stack 全栈    架构师
python             django  、flask
js           nestjs        koa        express      egg
数据库           SQL        MySQL
测试人员  
运维人员    linux


开源 分享 

黑马 尚硅谷
开源社区


## 静态内容网页
把内容直接写着HTML标签里

## 动态内容网站
### 前后端不分离(服务端渲染)
HTML标签里没有直接写内容，而是通过模板引擎（jsp、php、asp）替换 

js 的模块引擎（ejs）

### 前后端分离 AJAX （客户端渲染）

基础语法

- 异步编程
	- 事件循环
	- 浏览器渲染原理
	- 回调函数
	- Promise
	- Async Await
	- AJAX 异步数据请求

### 

DOM API             js 去操作html

代码 
- 同步


webpack
rollup 


立即执行函数  闭包

- 异步

AJAX

Asynchronous JavaScript And JSON 规范

ECMAScript
 javascript 

fetch
axios
$.ajax
XHR

XML缺点

```
<name>shuhao</name>
<age>12</age>
```


``` 
{
	"name": "shuhao",
	"age": 12
}
```

前端 --》 AJAX --〉后端 --》 数据库
								js
				JSON         SQL
前端 AJAX JSON  后端    SQL    关系型数据库MySQL
										ORM  
										数据库的对象 --》 JAVA对象 
				      JAVA对象——XML对象
XML ---- JS对象

js对象的值    DOM API    挂在DOM HTML

事件循环

面向对象
- 封装            闭包
- 继承            ES5 类              原型 原型链       ES6 类《--  原型 原型链    
- 多态

