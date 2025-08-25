import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./header.component.scss']
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
    { label: 'About', href: '#' },
    { label: 'JF Finance', href: '#' },
    { label: 'JF Foundation', href: '#' },
    { label: 'JF Hub', href: '#' },
    { label: 'Media', href: '#' },
    { label: 'Contact Us', href: '#'}
  ];

  openMenu() { this.menuOpen = true; }
  closeMenu() { this.menuOpen = false; }
  selectNav(idx: number) { this.selectedNav = idx; }
}