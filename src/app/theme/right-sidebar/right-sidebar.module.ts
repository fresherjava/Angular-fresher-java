import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RightSidebarComponent} from './right-sidebar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
  	RightSidebarComponent
  ],
  declarations: [RightSidebarComponent]
})
export class RightSidebarModule { }
