import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {

  private searchName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchGallery(term) {
    this.router.navigate(['/galleries/search/', this.searchName]);
  }

}
