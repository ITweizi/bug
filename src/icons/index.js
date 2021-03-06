// 注册一个全局组件
import svgIcon from '@/icons/svgIcon.vue'

export default function initSvgIcon(app) {
  app.component('svg-icon', svgIcon)
}

// 加载所有的svg
const file = require.context('@/icons/svg', false, /\.svg$/)
file.keys().map(file)
