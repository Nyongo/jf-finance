import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../home/components/header/header.component';
import { FooterComponent } from '../../home/components/footer/footer.component';

@Component({
  selector: 'app-loans-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './loans-page.component.html',
  styleUrl: './loans-page.component.scss',
})
export class LoansPageComponent {
  loanTypes = [
    {
      title: 'Business Loans',
      description:
        'Flexible financing solutions for small and medium enterprises',
      icon: '💼',
      features: ['Quick approval', 'Competitive rates', 'Flexible terms'],
    },
    {
      title: 'Personal Loans',
      description: 'Personal financing for various needs and emergencies',
      icon: '👤',
      features: [
        'No collateral required',
        'Fast processing',
        'Affordable rates',
      ],
    },
    {
      title: 'Agricultural Loans',
      description:
        'Specialized financing for farmers and agricultural businesses',
      icon: '🌾',
      features: [
        'Seasonal payment options',
        'Equipment financing',
        'Crop insurance',
      ],
    },
    {
      title: 'Education Loans',
      description: 'Invest in your future with our education financing',
      icon: '🎓',
      features: [
        'Low interest rates',
        'Deferred payments',
        'Coverage for all education levels',
      ],
    },
  ];

  applicationSteps = [
    {
      step: 1,
      title: 'Application',
      description: 'Fill out our simple online application form',
    },
    {
      step: 2,
      title: 'Documentation',
      description: 'Submit required documents for verification',
    },
    {
      step: 3,
      title: 'Review',
      description: 'Our team reviews your application thoroughly',
    },
    {
      step: 4,
      title: 'Approval',
      description: 'Get approved and receive funds quickly',
    },
  ];
}
