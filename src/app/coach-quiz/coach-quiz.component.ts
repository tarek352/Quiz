import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AfficherQuizService } from '../services/afficher-quiz.service';

@Component({
  selector: 'app-coach-quiz',
  templateUrl: './coach-quiz.component.html',
  styleUrls: ['./coach-quiz.component.css']
})
export class CoachQuizComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Questions', 'Type'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private alt: AfficherQuizService) {
    

    // Assign the data to the data source for the table to render
  }

  ngOnInit() {
    this.alt.getdata().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    }, err => console.log(err))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface UserData {
  id: string;
  Questions: string;
  Type: string; 
} 