## Vue-项目-重点

#### 07-重点
1. src/
2. build/ webpack相关代码
3. config/本地服务配置
4. .eslintignore eslint排除文件
5. .eslinttrc eslint配置文件

#### 02-项目-准备-代码规范- 自定义指令-lintfix
1. 结尾有;
2. 必须用全等if(a===b){}
3. 不允许出现未使用的变量
4. 不允许出现一个以上的空行

> 在package.json中scripts自定义指令：指令很长
> npm run 自定义指令命令
> npm run lintfix (自动按照规范修正全部js代码)
> npm run gitcus
> 自动打开浏览器 在命令dev结尾 加 --open
> 关闭eslint build/base.conf 43行左右注释掉

#### 03-项目-准备-element-ui-文档分析
> element-ui 饿了么开发团队
> 适用于vue项目-pc端项目
> 在main.js引入
> DDFE

#### 04-项目-准备-element-ui-安装引入
> npm i element-ui -S
> import ElementUI from 'element-ui';
> import 'element-ui/lib/theme-chalk/index.css';
> Vue.use(ElementUI)
> 删除模板中用不到的文件

#### 05-项目-准备-版本控制
> SVN/git 都可以做版本控制
1. git init -> .git
2. git status
3. git add .
4. git commit -m "注释"
5. 在代码托管平台(github) 新建远程仓库
6. git remote add origin https://github.com/Xperia-YU/myClass2019.git
7. git push -u origin master （之后再push 直接git push）

#### 06-项目-准备-新建分支-login组件
> 新建一个分支 专门写登录功能
> git branch  
> git checkout -b 分支
> 新建组件+配置路由
1. commit 每完成一个小功能就commit一次
2. push操作master完成

#### 07-项目-登录-axios-插件
> axios不是vue插件 -Vue.use(axios)
```js
// 插件模块
import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = function (Vue) {
  // 4. 添加实例方法
  Vue.prototype.$http = axios
}

export default MyHttpServers

```
> 在main.js中 导入 之后Vue.use()
> 结果：this.$http.get()

#### 08-项目-登录-发送登录请求
> login.vue methods handleLogin()
1. this.$http.post('login', this.formdata).then(res => {})
2. 对象解构赋值 res.data

#### 09-项目-登录-引入提示框组件
> this.$message.warning(msg)

#### 10-项目-登录-成功进入home组件
> 登录成功 -> 来到home组件
1. js编程式导航this.$router.push({name:'home'})
2. App.vue router-view
3. 新建home组件
4. 路由router.js配置路由 

#### 11-项目-登录-简化登录请求代码 - async和await
> 让异步请求代码看起来像同步代码
1. 找到一步操作有结果的代码 前面加await 同时借口一步操作的结果res
2. 找到距离一步操作有结果最近的方法 前面加async
```js
    async handleLogin () {
      // 让异步操作代码看起来像同步操作
      // ES7 async + await

      const res = await this.$http.post('login', this.formdata)
      // console.log(res)
      const {
        data, meta: { msg, status }
      } = res.data
      
      if (status === 200) {
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
```
#### 12-项目-登录-保存token值
> 目的：如果用户没登录->url直接来到home组件
> 在登陆成功时 保存正确用户的token
```js
  localStorage.setItem('token', data.token
```
#### 12-项目-登录-进入首页的token验证