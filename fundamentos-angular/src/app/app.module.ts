import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCostumizavelComponent } from './pipe-costumizavel/pipe-costumizavel.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCostumizavelComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
