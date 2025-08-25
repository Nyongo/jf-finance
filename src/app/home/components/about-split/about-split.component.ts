import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-split',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about-split.component.html',
  styleUrl: './about-split.component.scss'
})
export class AboutSplitComponent {

  onContact() {
    // wire to router.navigate or open a modal / contact form
    console.log("CTA clicked — navigate to contact or open modal");
  }
}
