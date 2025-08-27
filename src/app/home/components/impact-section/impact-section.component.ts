import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-impact-section',
  templateUrl: './impact-section.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./impact-section.component.scss'],
})
export class ImpactSectionComponent {
  stats = [
    { value: '573+', label: 'Schools Reached with Jackfruit Program' },
    { value: '164,438+', label: 'Students enrolled in Jackfruit schools' },
    {
      value: '263,101+',
      label: 'Parents with children enrolled in the participating schools',
    },
    { value: '75%', label: 'Female school directors empowered' },
    // { value: '6,675+', label: 'School teachers trained in our program' },
  ];

  constructor(private readonly router: Router) {}

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
