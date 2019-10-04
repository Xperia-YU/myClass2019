 <template >
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4"
                class="first">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png"
                 alt="无法显示图片">
          </div>
        </el-col>
        <el-col :span="18"
                class="middle">
          <div class="grid-content bg-purple-light">
            <h3>谣言检测系统</h3>
          </div>
        </el-col>
        <el-col :span="2"
                class="loginout">
          <div class="grid-content bg-purple"><a @click.prevent="handleSingout()">退出</a></div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px"
                class="aside">
        <!-- 侧边栏代码 -->
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-s-grid"></i>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-s-custom"></i>
              <span>角色列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-s-grid"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-location"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-collection-tag"></i>
              <span>微博管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-s-grid"></i>
              <span>微博列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-location"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-location"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="el-icon-s-grid"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">
              <i class="el-icon-pie-chart"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {

  beforeCreate () {
    // 获取token
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push({ name: 'login' })
    } else {

    }
    // if token 有 -> 继续渲染组件
    // toekn 没有 -> 登录
  },
  methods: {
    handleSingout () {
      // 1.清除token
      localStorage.clear()
      // 2.提示
      this.$message.success('退出成功')
      // 3.来到login
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
}
/* 头部样式 */
.el-row {
  height: 100%;
}
.first img {
  height: 60px;
}
.middle {
  text-align: center;
  /* line-height: 60px; */
}
.loginout {
  /* text-decoration: none; */
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.loginout:hover {
  text-decoration: underline;
}
/* 侧边栏样式 */
.el-menu-vertical-demo {
  height: 100%;
}
</style>
