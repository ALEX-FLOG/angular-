import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true, // 声明为独立组件
  imports: [HeroesComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_test';
}
