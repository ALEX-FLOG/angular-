import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormTestComponent } from './form-test/form-test.component';

@Component({
  selector: 'app-root',
  standalone: true, // 声明为独立组件
  imports: [HeroesComponent, DataBindingComponent, FormTestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_test';
}
