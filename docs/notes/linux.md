# Linux 笔记

Linux 系统与命令行学习笔记。

## 常用命令

### 文件操作

```bash
# 列出文件
ls -la

# 复制、移动、删除
cp source dest
mv source dest
rm -rf dir
```

### 权限管理

```bash
# 修改权限
chmod 755 script.sh

# 修改所有者
chown user:group file
```

### 进程管理

```bash
# 查看进程
ps aux
top

# 终止进程
kill -9 PID
```

## 参考资源

- [Linux 命令大全](https://man.linuxde.net/)
- [鸟哥的 Linux 私房菜](http://linux.vbird.org/)
