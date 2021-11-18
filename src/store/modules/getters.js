// 集中暴露vuex 各个模块中的属性和方法
export default {
  token: (state) => state.user.token
}
