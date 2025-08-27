import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  signInActive = false;
  selectedNav = 0;

  private scrollThreshold = 80;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = y > this.scrollThreshold;
  }

  nav = [
    { label: 'Home', href: '/home' },
    { label: 'Loans', href: '/loans' },
    { label: 'Partnership', href: '#' },
    { label: 'Classroom Plans', href: '#' },
    { label: 'Application Form', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

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
