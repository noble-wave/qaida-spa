import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeadComponent } from './head/head.component';
import { SlideSectionComponent } from './slide-section/slide-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { MatCardModule } from '@angular/material/card';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    SlideSectionComponent,
    ContentSectionComponent,
    FeatureSectionComponent,
    DescriptionSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
