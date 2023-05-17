import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed = true;
  isLoggedIn = false;
  
  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
  }

  loginWithRedirect() {
  }

  logout() {
  }
}
