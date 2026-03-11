/**
 * 自定义 posts 数据加载器
 * 确保从 docs/posts 目录正确加载所有博客文章
 */
import { createPostsLoader } from 'vitepress-velonor/loader'

// 使用与主题相同的 pattern（相对于 source directory，即 docs/）
export default createPostsLoader('posts/**/*.md')
