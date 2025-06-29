### Angular_Test
# 项目介绍

- 项目用于angular学习
- 项目使用 [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.
- 项目使用独立组件模式


# 配置文件
1. angular.json 
```
用于存放angular相关配置
```
2. package.json 
```
用于存放npm相关配置
```
3. package-lock.json 
```
第一次npm install后生成，记录了已安装依赖的详细信息。
可手动修改，用于指定依赖的具体版本号等信息
```
4. tsconfig.json 和 tsconfig.app.json
```
用于存放ts相关配置
```
5. tsconfig.spec.json
```
用于存放ts测试相关配置
```
6. .gitignore
```
用于规定不需要上传到git的文件
```
7. .editorconfig
```
此文件用于规范不同编辑器的代码格式
```

# 项目笔记
#### 1. angular创建组件
```
ng generate component 组件名
```

#### 2. 创建共享模块
- 独立组件模式不依赖模块，但仍然可以创建一个共享模块，将常用的依赖集中管理。
- 参考文件shared.module.ts
```
// 创建命令
ng generate module shared
```
#### 3. 插值语法
- {{ }} 中是一段简易的js可执行区域

#### 4. 属性绑定
- [] 属性绑定
- () 事件绑定
- [()] 双向绑定 = [] 属性绑定 + () 事件绑定

#### 5. 模版引用变量
- [ # ] 符号可以定义一个 模版引用变量，通过模版引用变量可以使用别的标签的数据
- 参考文件 data-binding.component.html