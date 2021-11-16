module.exports = {
  // 表示 .eslintrc.js文件所在的目录为根目录，下面定义的ESLint规则 '将被限制到该目录下'
  // 这也是为什么.eslintrc.js 这个文件推荐放在项目根目录下的原因
  root: true,

  // env 表示启用 ESLint 检测的环境
  env: {
    // 在 node 环境下启动 ESLint 检测
    node: true
  },

  // ESLint 中基础配置需要继承的配置 许多大厂定义了多种eslint配置的规则，
  // create项目时候 选择了standard ，所以当前的 eslint 是基于@vue/standard规范进行代码格式化校验的
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],

  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启用规则及其各自的错误级别
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
