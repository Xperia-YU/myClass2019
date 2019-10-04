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