<template>
  <div class="login-warp">
    <el-form label-position="top"
             label-width="80px"
             :model="formdata"
             class="login-form">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()"
                 type="primary"
                 class="login-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 登录请求
    async handleLogin () {
      // 让异步操作代码看起来像同步操作
      // ES7 async + await

      const res = await this.$http.post('login', this.formdata)
      // console.log(res)
      const {
        data, meta: { msg, status }
      } = res.data

      if (status === 200) {
        localStorage.setItem('token', data.token)
        // 登陆成功
        // 1.跳转home
        this.$router.push({ name: 'home' })
        // 2.提示成功
        this.$message.success(msg)
      } else {
        // 不成功
        // 1.提示消息
        this.$message.error(msg)
      }
    }
  }
  //   this.$http.post('login', this.formdata).then(res => {
  //     // console.log(res)
  //     const {
  //       data, meta: { msg, status }
  //     } = res.data
  //     if (status === 200) {
  //       // 登陆成功
  //       // 1.跳转home
  //       this.$router.push({ name: 'home' })
  //       // 2.提示成功
  //       this.$message.success(msg)
  //     } else {
  //       // 不成功
  //       // 1.提示消息
  //       this.$message.error(msg)
  //     }

  //     // const { meta: obj } = { meta: { msg: '11', status: 200 }}
  //     // => obj = { msg: '11', status: 200 }
  //   })
  // } }
}
</script>
<style>
.login-warp {
  height: 100%;
  background-color: #324152;
  /* 弹性盒布局 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>
