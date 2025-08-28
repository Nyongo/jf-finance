import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../home/components/header/header.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { JobPosting, JobService } from '../job.service';

@Component({
  selector: 'app-careers-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './careers-page.component.html',
  styleUrl: './careers-page.component.scss',
})
export class CareersPageComponent {
  pageName = 'Careers';

  openings: JobPosting[] = [];

  constructor(private jobs: JobService) {
    this.openings = this.jobs.getJobs();
  }
}
