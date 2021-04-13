import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './sub-modules/ng-material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { StepChartComponent } from './components/step-chart/step-chart.component';
import { TableComponent } from './components/table/table.component';
import { Services } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    StepChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
