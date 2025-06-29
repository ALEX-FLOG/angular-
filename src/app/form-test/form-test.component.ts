import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * 表单数据接口
 */
interface FormData {
  /** 姓名 */
  name: FormControl<string>;
  /** 年龄 */
  age: FormControl<number>;
}

@Component({
  selector: 'app-form-test',
  imports: [SharedModule],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.scss'
})
export class FormTestComponent {
[x: string]: any;

  /** 表单数据 */
  formData: FormGroup<FormData> = new FormGroup({
    name: new FormControl<string>("李四", { nonNullable: true }),
    age: new FormControl<number>(88, { nonNullable: true })
  });

  // 表单提交事件
  submit = () => {
    console.log('表单提交:', this.formData.value);
  }

  // 更新表单数据
  changeTo = (age: number) => {   
    this.formData.patchValue({ age });
    console.log('表单数据更新:', this.formData.value); 
  }
}
