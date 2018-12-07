import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReusableTableComponent } from "./reusable-table.component";
import { MatTableModule, MatPaginatorModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  declarations: [ReusableTableComponent],
  exports: [ReusableTableComponent]
})
export class ReusableTableModule {}
