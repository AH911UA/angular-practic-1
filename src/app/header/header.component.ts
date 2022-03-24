import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes = [
    { path: '/', name: 'Todos'},
    { path: '/drinks', name: 'Drinks'},
    { path: '/auth/login', name: 'Login'},
    { path: '/auth/register', name: 'Register'},
  ]

  public currRoute = '';
  
  constructor() { }

  ngOnInit(): void {

  }

  public handleClick(path: string) {
    this.currRoute = path;
  }

}
