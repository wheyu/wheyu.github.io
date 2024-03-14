# <div align="center">jquery 知识点整理</div>

<span id='date'>2023-08-04</span>
<span class='key-tag'>javascript</span><span class='key-tag'>jquery</span><span class='key-tag'>前端</span>

---
## 简介

- jQuery 是一个 JavaScript 库
- jQuery 库包含一下功能
  - HTML 元素选取
  - HTML 元素操作
  - CSS 操作
  - HTML 事件函数
  - JavaScript 特效和动画
  - HTML DOM 遍历和修改
  - AJAX
  - Utilities

## 安装

- 从 [官网下载](https://jquery.com/download/) 下载 jQuery 库

- 从 CDN 中载入 jQuery  [官方](https://code.jquery.com/jquery-3.5.1.min.js)、[地址一](https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js)、[地址二](https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js)


- 引入： 

```javascript
<head>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
```

## API

- 选择器

  - css选择器

```
<div class='p' id='main'>
  <div class='a' alt='test'>
    <div class='b'>
      <span class='b'></span>
      <span class='c'></span>
      <span class='c'></span>
      <span class='c'></span>
    </div>
  </div>
  <div class='p'></div>
</div>
```
  
| 名称           | 语法 | 说明 |
| -------------- | ------------- | ----------------------------------------------- |
| 元素选择 | `$('span')` | 匹配任何`<span>`元素（2个） |
| id选择    | `$('#main')` | 匹配`id`为`main`的元素（1个）`唯一` |
| 类选择 | `$('.p')` | 匹配任何`class`为`p`的元素（2个） |
| 属性选择 | `$('div[alt='test']')` | 匹配任何`alt`为`test`的元素（1个） |
| 限定范围   | `$('span','#main')` | 匹配所有`id`为`main`中指定`<span>`元素（2个） |
| 后代 | `$('.a .b')` | 匹配所有`class`为`a`中`class`为`b`的元素（2个） |
| 直接后代 | `$('.a>.b')` | 匹配所有`class`为`a`的子一级中`class`为`b`的元素（1个） |
| 紧邻兄弟 | `$('.b+.c')` | 匹配`class`为`b`的相邻`class`为`c`的元素（1个） |
| 一般兄弟 | `$('b.~.c')` | 匹配所有`class`为`b`的同级别`class`为`c`的元素（3个） |
| 伪类 | `$('a:visited')` | 匹配所有被访问过的`<a>`元素（0个） |
| 伪元素 | `$('span::selection')` | 匹配所有`<span>`中被选中或处于高亮状态元素 |
  
- 常用

| 名称                | 语法                                                         | 说明                           |
| ------------------- | ------------------------------------------------------------ | ------------------------------ |
| 点击                | `.click(func)`                                               |                                |
| 双击                | `.dblclick(func)`                                            |                                |
| 鼠标移入/移出       | `.mouseenter/mouseleave(func)`                               | 移入触发/移出触发              |
| 鼠标移入移除        | `.hover(func1,func2)`                                        | 移入触发func1、移出触发func2   |
| 价盘按下/按住/松开  | `.keydown/keypress/keyup(func)`                              |                                |
| 表单提交            | `.submit(func)`                                              |                                |
| 内容改变            | `.change(func)`                                              |                                |
| 获得焦点/失去焦点   | `.focus/blur(func)`                                          |                                |
| 加载                | `.load(func)`                                                | 适用于带url的元素（1.8中废弃） |
| 大小变化            | `.resize(func)`                                              |                                |
| 滚动                | `.scroll(func)`                                              |                                |
| 隐藏/显示           | `.hide/show(time)`=`toggle(time)`                            | time：执行时间，空则立刻执行   |
| 内部添加(结尾/开头) | `.append/prepend('')`                                        | 可以是文本或者元素             |
| 平级添加(结尾/开头) | `.after/before('')`                                          |                                |
| 删除                | `.remove()``.remove('a')`                                    | 可加参数筛选                   |
| 清空节点            | `.empty()`                                                   | 清空匹配元素下所有的元素       |
| 添加/删除class      | `.addClass/removeClass('b')`=`.toggleClass('b')`             |                                |
| 获取css值           | `.css('color')`                                              |                                |
| 设置css值           | `.css('color','red')``.css({'width':'1px','color':'2px'})`   |                                |
| 元素文本            | `.text()/.text('新值')`                                      | 获取/设置                      |
| 元素                | `.html()/.html('<span>新</span>')`                           | 获取/设置                      |
| 表单文本            | `.val()/.val('用户名')`                                      | 获取/设置                      |
| 移除属性            | `.removeAttr('href')`                                        |                                |
| 属性                | `.attr('alt')/.attr('alt','题')/.att({'alt':'题','src':'url'})` | 获取/设置/设置多个             |
| 绑定                | `.on('click',func)`                                          |                                |
| 解绑                | `.off('click')`                                              |                                |

- 一些例子
<div class='decrypt undecrypt' jmType='md' value='U2FsdGVkX1/E8G0IoQiqMZ/z651nAC5+OM3lF9XsSKoZp3F9dkhWYYGdxzJg9vkPWm4MsgTwIS6TU1OynwEhDnO90lJQxNUJo95pwsJeN0JJ4zr/3zqkRG2LvenGKGTdBq+UQajvw+8UXq/mHZ+MLq/5FL9fdqjxhERVU7KkYxwlJkCIKpIvXmqNzYd2J6cQXQhLlTZZwblO03RIg4mj9eR98dF8hnq7wMQV7XRh2bJcLsqlIw/2lCxkp/SsNH2LM8arP3e/jwIt77row80f3jtKw1SYO/y4UOidiXSZh8+d0mQGjhMV4b64ViND2IyTpAV7qW138/cJGxDAbfUQgw=='><span>例子一，点击查看</span></div>