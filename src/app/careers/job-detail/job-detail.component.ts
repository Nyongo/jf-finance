import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../home/components/header/header.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { JobPosting, JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss',
})
export class JobDetailComponent {
  job?: JobPosting;

  constructor(private route: ActivatedRoute, private jobs: JobService) {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.job = this.jobs.getJobById(id);
  }
}
