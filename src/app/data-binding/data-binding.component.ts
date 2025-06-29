import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-data-binding',
  imports: [SharedModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  inputValue: string = '初始值'; // 输入框的初始值

  // 输入框值改变
  onInputChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }

  // 按钮点击事件
  onButtonClick = (input1: any) => {
    console.log('Button clicked:', input1.value);
  }
}
