import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearch(searchFilter: string){
    //this.router.navigate(['jobs'], {relativeTo: this.actRoute})
    console.log(searchFilter)
  }

}
