import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeaderComponent } from '../../home/components/header/header.component';
import { FooterComponent } from '../../home/components/footer/footer.component';
import { RouterModule } from '@angular/router';

interface Partner {
  name: string;
  type: 'image' | 'video';
  image?: string;
  videoId?: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-partnership-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './partnership-page.component.html',
  styleUrl: './partnership-page.component.scss',
})
export class PartnershipPageComponent {
  constructor(private sanitizer: DomSanitizer) {}

  partners: Partner[] = [
    {
      name: 'Teach United',
      image: 'assets/images/partners/teachunited.svg',
      type: 'image',
      description:
        'Teach United works primarily to build teacher capacity and improve the quality of education in underserved communities.',
      link: 'https://teachunited.org',
    },
    {
      name: 'Cheza Cheza',
      videoId: 'ffHk8LCb2qY', // Example YouTube video ID
      type: 'video',
      description:
        'Cheza Cheza is a social enterprise that uses play-based learning to improve early childhood development outcomes.',
      link: 'https://chezacheza.org',
    },
    {
      name: 'Dalberg',
      image: 'assets/images/partners/dalberg.gif',
      type: 'image',
      description:
        'Dalberg is a global consulting firm that works to build a more inclusive and sustainable world.',
      link: 'https://dalberg.com',
    },
    {
      name: 'Save the Children',
      image: 'assets/images/partners/save_the_children.png',
      type: 'image',
      description:
        'Save the Children works to ensure children around the world have access to quality education and healthcare.',
      link: 'https://savethechildren.org',
    },
    {
      name: 'UNESCO',
      image: 'assets/images/partners/un.png',
      type: 'image',
      description:
        'UNESCO works to build peace through international cooperation in education, sciences, and culture.',
      link: 'https://en.unesco.org',
    },
    {
      name: 'Microsoft',
      image: 'assets/images/partners/microsoft.png',
      type: 'image',
      description:
        'Microsoft partners with organizations worldwide to advance digital skills and technology access in education.',
      link: 'https://microsoft.com',
    },
  ];

  openPartnerLink(link: string) {
    window.open(link, '_blank');
  }

  getYouTubeEmbedUrl(videoId: string | undefined): SafeResourceUrl {
    if (!videoId) {
      return '';
    }
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
