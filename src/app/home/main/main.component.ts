import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { MainmappingComponent } from './mainmapping/mainmapping.component';

@Component({
  selector: 'app-main',
  imports: [CategoriesComponent, MainmappingComponent],
  templateUrl: './main.component.html',
})
export class MainComponent {}
