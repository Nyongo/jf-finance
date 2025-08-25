import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials-grid',
  templateUrl: './testimonials-grid.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./testimonials-grid.component.scss']
})
export class TestimonialsGridComponent {
  testimonials = [
    {
      name: 'Ada Harrison',
      text: 'I wish JF Finance was there when we started this school. Would have been way too far by now.',
      stars: 4,
      school: 'School Name, Area',
      avatar: '', // Add avatar URL if available
    },
    {
      name: 'Johnstone Kivu',
      text: 'The Jackfruit team have been spectacular. Definitely I am referring my colleagues to them.',
      stars: 5,
      school: 'School Name, Area',
      avatar: '',
    },
    {
      name: 'Harrietta Mary',
      text: 'It is nice to deal with partners who have humility. Keep up!',
      stars: 4,
      school: 'School Name, Area',
      avatar: '',
    },
    // Add more testimonials as needed
  ];

  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  private get scrollAmount(): number {
    if (!this.carousel) return 600;
    // Responsive: scroll by the width of one card
    const width = this.carousel.nativeElement.clientWidth;
    if (width >= 1024) return 384; // lg:w-96 (24rem)
    if (width >= 768) return 448;  // md:w-[28rem] (28rem)
    return 320;                    // w-80 (20rem)
  }

  scrollNext() {
    this.carousel.nativeElement.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }

  scrollPrev() {
    this.carousel.nativeElement.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }
}