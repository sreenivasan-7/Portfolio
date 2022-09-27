import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { MyWorkComponentComponent } from './my-work-component/my-work-component.component';

import { BhimCardComponentComponent } from './bhim-card-component/bhim-card-component.component';
import { ByfCardComponentComponent } from './byf-card-component/byf-card-component.component';
import { LgCardComponentComponent } from './lg-card-component/lg-card-component.component';
import { LatCardComponentComponent } from './lat-card-component/lat-card-component.component';
import { QuoteComponentComponent } from './quote-component/quote-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    IntroComponentComponent,
    MyWorkComponentComponent,

    BhimCardComponentComponent,
    ByfCardComponentComponent,
    LgCardComponentComponent,
    LatCardComponentComponent,
    QuoteComponentComponent,
    FooterComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
