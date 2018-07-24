import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { ThemeComponent } from './theme.component';
import {AboutUsComponent} from './about-us/about-us.component';


const route:Routes = [
	{
		path:'',
		component: ThemeComponent,
		children: [
			{
				path: '',
				loadChildren: './home/home.module#HomeModule'
			},
			{
				path: 'about-us',
				loadChildren: './about-us/about-us.module#AboutUsModule'
			}
		]
	},

];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports:[
  	RouterModule
  ]
})
export class ThemeRoutingModule { }
