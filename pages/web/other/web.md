# 网页发展史
## 静态内容网页
所有的内容都是预习写好在了HTML中，不会改变

## 动态内容网页
### 前后端不分离
#### Template Engine 模版引擎
Java
- Velocity
- JSP
- Freemarker
- Thymeleaf

JavaScript
- EJS

通过将模板引擎中定义的特定模版转化成HTML字符串 最终返回给浏览器

#### SSR 服务端渲染
> Server Side Rendering

通过将模板引擎中定义的特定模版转化成HTML字符串是发生在服务端的

在浏览器（客户端）拿到的就是完整的HTML（完整的网页）

#### Router 后端路由
> Back End Router

#### MPA 多页面应用 
> Multiple Page Application

一个页面就是一个html

### 前后端分离
#### AJAX
> Asynchronous JavaScript And XML

实现网页中的部分刷新

通过JavaScript的异步编程 以及 XML的文件传输格式，实现前后端交互

#### CSR 客户端渲染 
> Client Side Rendering

最初浏览器拿到的只是一个空白的HTML文件，然后通过解析执行JS文件，通过AJAX发起异步请求获取数据，将数据放入视图后，再调用DOM API将视图挂载到页面上。

#### Router 前端路由
> Front End Router

- hash路由
- history路由

#### SPA 单页面应用 
> Single Page Application

一个网站只有一个html文件，最终的页面切换是通过前端路由以及AJAX来实现的异步刷新


