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
        'Teach United works globally to build educator and leadership capacity within schools. Their programs have helped over 1 million children receive a higher quality education across the globe. Jackfruit partners with Teach United to increase education capacity within Jackfruit schools.',
      link: 'https://teachunited.org',
    },
    {
      name: 'Cheza Cheza',
      videoId: 'ffHk8LCb2qY', // Example YouTube video ID
      type: 'video',
      description:
        'Dance is the perfect way for children to express their feelings, forget their stresses and grow in confidence. ChezaCheza runs weekly dance therapy classes that tick all these boxes and more, providing a safe, fun, inclusive environment. These free sessions teach life skills and social-emotional learning and are massively beneficial for all children, but especially those with low self-esteem, anxiety or trauma. ChezaCheza sessions allow them to process and communicate their feelings in an emotionally supportive setting, where they connect with peers and caring mentors. Jackfruit has partnered with ChezaCheza to run free weekly classes in schools. ',
      link: 'https://chezachezadance.org/',
    },
    {
      name: 'Domysuma Architects',
      image: 'assets/images/partners/domsuma.svg',
      type: 'image',
      description:
        'This Kenyan-based architectural company designs and builds economical  and sustainable buildings of all sizes. One of their key aims is to  bridge the gap between the construction industry and youth employment in Kenya. Jackfruit has partnered with Domysuma Architects to design and  build healthy and affordable classrooms.',
      link: 'https://www.domysumaarchitects.com/home',
    },
    {
      name: 'East African Educational Publishers',
      image: 'assets/images/partners/eaep.svg',
      type: 'image',
      description:
        'Books are an essential tool to boost children’s learning. Jackfruit has  partnered with East African Educational Publishers who produce school  textbooks and reading books, many by local authors. We provide free  textbooks to all Jackfruit schools as well as a discounted rate for all  other schools.',
      link: 'https://www.eastafricanpublishers.com/',
    },
    {
      name: 'Instill Education',
      image: 'assets/images/partners/instill.svg',
      type: 'image',
      description:
        'Instill Education is a technology company offering teacher up-skilling throughout Africa. Their online and offline teacher training gets new teachers into education, and improves the skills of experienced teaching staff. Jackfruit has partnered with Instill Education so our schools can access their wide-ranging training content.',
      link: 'https://instill.education/',
    },
    {
      name: 'Opportunity International',
      image: 'assets/images/partners/OI.svg',
      type: 'image',
      description:
        'Opportunity International is striving to end global poverty through empowering and enabling people to attain an education, giving them the chance to thrive with dignity and purpose.  Jackfruit partners with Opportunity International for technical assistance and academic research. ',
      link: 'https://opportunity.org/',
    },
    {
      name: 'Global Schools Forum',
      image: 'assets/images/partners/global.svg',
      type: 'image',
      description:
        'Global Schools Forum works with non-state schools, delivering quality education and bringing a more accessible funding and support system. They understand the importance of all children, regardless of their background or family income, being able to access a good standard of education. Jackfruit has partnered with them for their expertise in supporting schools and enabling education in the regions it is most needed.',
      link: 'https://globalschoolsforum.org/',
    },
    {
      name: 'Education Finance Network',
      image: 'assets/images/partners/financenetwork.svg',
      type: 'image',
      description:
        'Education Finance Network is a USAID supported organization that helps grow the private education ecosystem around the world. Jackfruit has partnered with the Education Finance Network to help develop sensible policies to support the private education sector, and implement best practices in Kenya.',
      link: 'https://educationfinancenetwork.org/',
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
