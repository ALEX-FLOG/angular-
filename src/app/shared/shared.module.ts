import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule], // 导入 FormsModule 和 ReactiveFormsModule
  exports: [FormsModule, ReactiveFormsModule] // 导出 FormsModule 和 ReactiveFormsModule 供其他组件使用
})
export class SharedModule {}