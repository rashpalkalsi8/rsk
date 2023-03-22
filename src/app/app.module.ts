import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ProgressComponent } from './components/progress/progress.component';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';

import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule  } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    PrivacyComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatNativeDateModule, 
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
