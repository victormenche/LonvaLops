import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { TitleViewComponent } from './title-view/title-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [AppComponent, TitleViewComponent, AboutUsComponent, BottomBarComponent],
  imports: [BrowserModule, CustomMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
