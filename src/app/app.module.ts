import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { FormsModule } from '@angular/forms';
import { CalculoSalarioComponent } from './calculo-salario/calculo-salario.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CalculoSalarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
