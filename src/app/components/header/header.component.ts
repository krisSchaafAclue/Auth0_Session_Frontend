import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed!: boolean;
  isLoggedIn!: boolean;
  
  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.isCollapsed = true;
    this.isLoggedIn = false;
  }

  loginWithRedirect() {
  }

  logout() {
  }
}
