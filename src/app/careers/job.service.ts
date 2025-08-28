import { Injectable } from '@angular/core';

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: JobType;
  description: string;
  responsibilities?: string[];
  qualifications?: string[];
  applyUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class JobService {
  private jobs: JobPosting[] = [
    // {
    //   id: 'education-finance-officer',
    //   title: 'Education Finance Officer',
    //   location: 'Nairobi, Kenya',
    //   type: 'Full-time',
    //   description:
    //     'Work with schools to structure affordable loan solutions and support them through the application process.',
    //   responsibilities: [
    //     'Manage a portfolio of school clients',
    //     'Assess creditworthiness and structure loans',
    //     'Coordinate with operations for smooth disbursement',
    //   ],
    //   qualifications: [
    //     '2+ years in lending or financial services',
    //     'Strong analytical and relationship skills',
    //   ],
    // },
    // {
    //   id: 'partnerships-associate',
    //   title: 'Partnerships Associate',
    //   location: 'Hybrid / Nairobi',
    //   type: 'Full-time',
    //   description:
    //     'Support our partnerships pipeline and help deliver value-added services to our network of schools.',
    //   responsibilities: [
    //     'Research and engage potential partners',
    //     'Coordinate partner pilots and benefits delivery',
    //   ],
    //   qualifications: [
    //     'Excellent communication skills',
    //     'Project coordination experience',
    //   ],
    // },
    // {
    //   id: 'operations-intern',
    //   title: 'Operations Intern',
    //   location: 'Nairobi, Kenya',
    //   type: 'Internship',
    //   description:
    //     'Assist with program operations, data collection, and reporting across our portfolio.',
    //   responsibilities: [
    //     'Support field activities and data processes',
    //     'Prepare weekly operational reports',
    //   ],
    //   qualifications: [
    //     'Interest in education and operations',
    //     'Detail oriented',
    //   ],
    // },
  ];

  getJobs(): JobPosting[] {
    return this.jobs;
  }

  getJobById(id: string): JobPosting | undefined {
    return this.jobs.find((j) => j.id === id);
  }
}
