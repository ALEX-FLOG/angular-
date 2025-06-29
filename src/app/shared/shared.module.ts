import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  exports: [FormsModule] // 导出 FormsModule 供其他组件使用
})
export class SharedModule {}