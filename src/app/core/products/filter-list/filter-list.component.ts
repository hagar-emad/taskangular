import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/_models/filtet.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
@Input() filter!:Filter;
  constructor() { }

  ngOnInit(): void {
  }

}
