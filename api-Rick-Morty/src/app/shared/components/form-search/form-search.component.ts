import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `
    <input type="text"
       [(ngModel)]="searchText"
       autofocus
       class="form-control-dark w-100"
       placeholder="Search name...."
       (keyup)="onSearch()"
       />
       <button *ngIf="searchText" class="btn btn-danger" (click)="clearSearch()">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>Clear</button>
    `,
    styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {
  searchText: string = '';

  constructor(private router:Router) {}

  ngOnInit(): void {
    
  }

  onSearch() {
    if (this.searchText && this.searchText.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: this.searchText },
      });
    }
  }
  
  clearSearch() {
    this.searchText = '';
  } 

} 