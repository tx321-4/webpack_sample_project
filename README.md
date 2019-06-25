# webpack4.0+ 安装一个完整的开发环境
 
## 原文 转载：https://www.jianshu.com/p/42e11515c10f

## 可以按照上面的原文 练习  我这边只列出区别
-----------------------------
1.初始化项目 `npm init `<br />
2.安装 webpack 注：（webpack4.0+ 移除了 webpack的脚手架[webpack-cli]） ,所以要单独安装
```bash
npm install --save-dev webpack
```
```bash
npm install --save-dev webpack-cli
```


3.webpack-project根目录下，创建两个文件夹,app文件夹和public文件夹，app文件夹用来存放原始数据和我们将写的JavaScript模块，public文件夹用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个index.html文件）。接下来我们再创建三个文件:

index.html --放在public文件夹中;

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack Project</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

Greeter.js-- 放在app文件夹中;
```html
//Greeter.js
module.exports = function(){
    var greet = document.createElement('div');
    greet.textContent = 'Hi there and greetings!';
    return greet;
};  
```

main.js-- 放在app文件夹中;
```html
//main.js
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());
```

编写文件内容后 ,打包文件 ----webpack4.0+ 打包的命令变了
```bash
webpack app/main.js -o public/bundle.js --mode development
```

方法二通过配置文件来打包
webpack-project根目录下， 创建文件配置文件 --webpack.config.js

```javascript
module.exports = {
    entry : __dirname + '/app/main.js', //指定的唯一入口
    output: {
        path: __dirname + '/public', // 打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    }
}

webpack  --mode development
```

更快捷的执行打包任务
npm可以引导任务执行
在package.json中对scripts对象进行相关设置即可

```javascript
"dev": "webpack --mode development",
```

输入 `npm run dev ` 打包<br />
