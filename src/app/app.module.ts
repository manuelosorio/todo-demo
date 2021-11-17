import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FakeListComponent } from './fake-list/fake-list.component';
import { FakeListService } from './fake-list.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, FakeListComponent],
  bootstrap: [AppComponent],
  providers: [FakeListService],
})
export class AppModule {}
