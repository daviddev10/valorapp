import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelectedPageIndex(index: number) {
    switch (index) {
      case EIndexPage.Home:
        this.router.navigate(['']);
        break;
      case EIndexPage.Purchase:
        this.router.navigate(['/compras']);

        break;
      case EIndexPage.Config:
        this.router.navigate(['/config']);

        break;

      default:
        break;
    }
  }

}


enum EIndexPage {
  'Home' = 0,
  'Purchase' = 1,
  'Config' = 2
}
