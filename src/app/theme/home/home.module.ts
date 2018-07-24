import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Routes,RouterModule} from '@angular/router';
import {RightSidebarModule} from '../right-sidebar/right-sidebar.module';


const route: Routes = [
	{
		path: '',
		component:HomeComponent,
	}
]

@NgModule({
  imports: [
    CommonModule,
    RightSidebarModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
