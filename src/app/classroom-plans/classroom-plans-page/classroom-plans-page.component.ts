import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../home/components/header/header.component';
import { FooterComponent } from '../../home/components/footer/footer.component';

@Component({
  selector: 'app-classroom-plans-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './classroom-plans-page.component.html',
  styleUrl: './classroom-plans-page.component.scss',
})
export class ClassroomPlansPageComponent {
  constructor() {}
}
