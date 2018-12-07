import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ReusableTableModule } from "./reusable-table/reusable-table.module";
import { GoodreadsService } from "./goodreads.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ReusableTableModule,
    HttpClientModule
  ],
  providers: [GoodreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
