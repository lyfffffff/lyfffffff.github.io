# CSS 笔记

CSS 样式与布局学习笔记。

## 布局方式

### Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
```

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

## 常用技巧

### 居中

- 水平居中：`margin: 0 auto` 或 `text-align: center`
- Flex 居中：`display: flex; justify-content: center; align-items: center`
- Grid 居中：`place-items: center`

### 响应式

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## 参考资源

- [MDN CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
