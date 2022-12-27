import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userId: string;
  selectedIndex: number = 0;

  constructor(
    private actRoute: ActivatedRoute,
    private utilsService: UtilsService
  ) {
    this.userId = this.actRoute.snapshot.params['id'];
    this.utilsService.resultIndex$.subscribe(newIndex => this.selectedIndex = newIndex);
  }

  ngOnInit(): void {

  }

}
