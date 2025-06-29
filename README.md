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

#### 5. 表单控件
- for="age" 属性的值必须与对应输入控件的 id 属性值一致。
通过这种关联，点击标签时会自动聚焦到对应的输入控件。
```
  <div>
    <label for="age">年龄:</label>
    <input id="age" formControlName="age" type="number" class="form-control" />
  </div>
```

- 表单初始化
```
  /** 表单数据 */
  formData: FormGroup<FormData> = new FormGroup({
    //- nonNullable: true 不允许为null
    //"李四"  初始值
    name: new FormControl<string>("李四", { nonNullable: true }),
    age: new FormControl<number>(88, { nonNullable: true })
  });
```

- formgroup取值
```
<p>名字:{{formData.get('name')?.value}}</p>
```

- fpatchValue  更新部分formgroup数据
```
  // 更新表单数据
  changeTo = (age: number) => {   
    this.formData.patchValue({ age });
    console.log('表单数据更新:', this.formData.value); 
  }
```

- setValue  更新全部formgroup数据
```
  // 更新表单数据
  changeTo = (age: number) => {   
    this.formData.setValue({
    name: '张三',
    age: 25
  });
    console.log('表单数据更新:', this.formData.value); 
  }
```