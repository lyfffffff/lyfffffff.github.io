# JavaScript 笔记

JavaScript 学习笔记与常用技巧。

## 基础概念

### 变量声明

- `let` - 块级作用域，可重新赋值
- `const` - 块级作用域，不可重新赋值
- `var` - 函数作用域，存在提升

### 数据类型

- 原始类型：`string`、`number`、`boolean`、`null`、`undefined`、`symbol`、`bigint`
- 引用类型：`object`、`array`、`function`

## 常用 API

### 数组方法

```javascript
// 遍历
arr.forEach((item, index) => {})
arr.map(item => item * 2)
arr.filter(item => item > 0)

// 归并
arr.reduce((acc, cur) => acc + cur, 0)
```

### 异步编程

- `Promise` - 处理异步操作
- `async/await` - 更清晰的异步语法

## 参考资源

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript.info](https://zh.javascript.info/)
