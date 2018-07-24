import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {Routes,RouterModule} from '@angular/router';


const route:Routes = [
	
	{
		path:'',
		component:AboutUsComponent,
	}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[
  	RouterModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
