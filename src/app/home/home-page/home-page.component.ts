import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutSplitComponent } from '../components/about-split/about-split.component';
import { FeatureCardsRowComponent } from '../components/feature-cards-row/feature-cards-row.component';
import { MapHighlightComponent } from '../components/map-highlight/map-highlight.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { TestimonialsGridComponent } from '../components/testimonials-grid/testimonials-grid.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ImpactSectionComponent } from '../components/impact-section/impact-section.component';

@Component({
  selector: 'app-home-page',
  imports: [ 
    CommonModule,
    AboutSplitComponent,
    MapHighlightComponent,
    PartnersComponent,
    TestimonialsGridComponent,
    ImpactSectionComponent,
    HeaderComponent,
    HeroSliderComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
