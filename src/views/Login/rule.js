export const passwordValidate = (rule, value, callback) => {
  // 获取输入的值做验证
  if (value.length < 6) {
    callback(new Error('密码至少是六位')) // no
  } else {
    callback() // ok
  }
}

// 那边加括号 这样用
// export const passwordValidate = ()=>{
//   return (rule, value, callback) => {
//     // 获取输入的值做验证
//     if (value.length < 6) {
//       callback(new Error('密码至少是六位')) // no
//     } else {
//       callback() // ok
//     }
//   }

// }
