import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {ThemeRoutingModule} from './theme-routing.module';
import {ThemeComponent} from './theme.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [HeaderComponent,ThemeComponent, FooterComponent]
})
export class ThemeModule { }
