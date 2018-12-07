import { Component, OnInit, ViewChild, Input, SimpleChange } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: "reusable-table",
  templateUrl: "./reusable-table.component.html",
  styleUrls: ["./reusable-table.component.css"]
})
export class ReusableTableComponent {
  @Input() columns;
  @Input() data;
  dataSource: MatTableDataSource<any>;
  displayedColumns: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes: SimpleChange) {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.name);
  }

  public getColumnName = columnDef => {
    return this.columns.find(column => column.name == columnDef)['header'];
  }

}
