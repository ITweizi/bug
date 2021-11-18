<template>
  <div class="login-container">
    <!-- form表单 -->
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      size="mini"
      ref="loginRef"
    >
      <!-- 用户登陆 -->
      <div class="title-container">
        <h3 class="title">用户登陆</h3>
      </div>
      <!-- 第一块 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon color="#ccc" class="no-inherit">
            <svg-icon iconName="user" />
          </el-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <!-- 第二块 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon color="#ccc" class="inherit">
            <svg-icon iconName="password" />
          </el-icon>
        </span>
        <el-input
          placeholder="password"
          v-model="loginForm.password"
          name="password"
          :type="flag ? 'password' : 'text'"
        ></el-input>

        <span class="svg-container" @click="toggleIcon">
          <svg-icon :iconName="flag ? 'neye' : 'eye'" />
        </span>
      </el-form-item>
      <!-- 登陆按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-top: 30px"
        @click="handleLogin"
        >登陆</el-button
      >
    </el-form>

    <!-- 使用svg -->
    <!-- <img :src="svg" alt="" class="svg" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 具名导出 要加{}
import { passwordValidate } from './rule.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// 表单数据
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
// 切换显示隐藏password
const flag = ref(true)
const toggleIcon = () => {
  flag.value = !flag.value
}

// 表单验证
const loginRules = ref({
  username: [
    {
      // 必须填写
      required: true,
      // 失去焦点
      trigger: 'blur',
      // 提示信息
      message: '账号不能为空'
    }
  ],
  password: [
    {
      trigger: 'blur',
      // 对整个表单作验证。 参数为一个回调函数。 验证表单后，回调函数会包含两个参数：一个布尔值，表示表单验证是否通过；一个对象，包含所有未通过验证的字段。 若不传入回调函数，则会返回一个 promise
      validator: passwordValidate
    }
  ]
})

// 怎么引入dom
const loginRef = ref(null)
// 定义store
const store = useStore()
// 定义router
const router = useRouter()
// 登录逻辑
const handleLogin = () => {
  // 验证一次表单的数据是否合法
  loginRef.value.validate((validate) => {
    if (!validate) {
      return // 一个规则没有通过
    }
    // 验证通过执行登录逻辑 调用定义好的actions
    store.dispatch('user/login', loginForm.value).then((res) => {
      // 只有在登陆成功的情况下才跳转
      router.push({
        name: 'Index'
      })
    })
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.svg {
  width: 20px;
  height: 20px;
}

.login-container {
  min-height: 100%;
  width: 100%;
  height: 100vh;
  background: $bg;
  overflow: hidden;

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
.login-form {
  position: relative; //绝对
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

  :deep(.el-form-item) {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;

    .el-input {
      height: 47px;
      width: 85%;

      .el-input__inner {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $cursor;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
