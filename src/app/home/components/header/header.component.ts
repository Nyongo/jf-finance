import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, NgIf, RouterModule],
  standalone: true,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageName?: string;
  isScrolled = false;
  hasSolidBg = false;
  menuOpen = false;
  signInActive = false;
  selectedNav = 0;

  private scrollThreshold = 80;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.choosePageNav();
    this.backgroundColorCheck();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = y > this.scrollThreshold;
  }

  nav = [
    { label: 'Home', href: '/home' },
    { label: 'Loans', href: '/loans' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Classroom Plans', href: '/classroom-plans' },
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  goTo(link: string) {
    this.router.navigate([link]);
  }

  backgroundColorCheck() {
    if (this.pageName != 'Home') {
      this.hasSolidBg = true;
    } else {
      this.hasSolidBg = false;
    }
  }

  choosePageNav() {
    if (this.pageName == 'Loans') {
      this.selectedNav = 1;
    } else if (this.pageName == 'Partnership') {
      this.selectedNav = 2;
    } else if (this.pageName == 'Classroom Plans') {
      this.selectedNav = 3;
    } else if (this.pageName == 'Application Form') {
      this.selectedNav = 4;
    } else if (this.pageName == 'Careers') {
      this.selectedNav = 5;
    } else if (this.pageName == 'Contact Us') {
      this.selectedNav = 6;
    } else {
      this.selectedNav = 0;
    }
  }

  openMenu() {
    this.menuOpen = true;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  selectNav(idx: number) {
    this.selectedNav = idx;
  }
}
