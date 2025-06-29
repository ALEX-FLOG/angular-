import { Component, OnInit } from '@angular/core';
import { Hero } from '../dto/hero';
import { SharedModule } from '../shared/shared.module';




@Component({
  selector: 'app-heroes',
  standalone: true, // 声明为独立组件
  imports: [SharedModule],// 导入依赖
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  garcia:Hero = {
    id: 1,  
    name: '加西亚·马尔克斯'
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
