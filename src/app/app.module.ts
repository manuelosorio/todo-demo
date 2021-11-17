import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeListComponent } from './fake-list/fake-list.component';
import { FakeListService } from './fake-list.service';
import { NgxMasonryModule } from './ngx-masonry/ngx-masonry.module';

@NgModule({
  imports: [HttpClientModule, NgxMasonryModule, BrowserAnimationsModule],
  declarations: [AppComponent, FakeListComponent],
  bootstrap: [AppComponent],
  providers: [FakeListService],
})
export class AppModule {}
