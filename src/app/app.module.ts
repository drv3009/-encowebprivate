import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule
} from "@angular/material";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContentService } from "./shared/services/content.service";
import { HeaderComponent } from "./shared/tpls/header/header.component";
import { FooterComponent } from "./shared/tpls/footer/footer.component";
import { HomeComponent } from "./home/home.component";

import { AboutusModule } from "./aboutus/aboutus.module";
import { BusinessProfileModule } from "./business-profile/business-profile.module";
import { TechnologyModule } from "./technology/technology.module";
import { CareersModule } from "./careers/careers.module";
import { CapitaliseDirective } from "./shared/directives/capitalise.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CapitaliseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,

    AboutusModule,
    BusinessProfileModule,
    TechnologyModule,
    CareersModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
