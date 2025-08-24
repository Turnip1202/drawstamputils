import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 如果你的 GitHub Pages 访问路径是 https://username.github.io/repo-name/
  // 则 base 应该设置为 '/repo-name/'，例如 '/drawstamputils/'
  base: '/',  // 这里需要填写你的仓库名称
})