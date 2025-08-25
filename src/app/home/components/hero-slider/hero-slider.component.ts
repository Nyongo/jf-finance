// src/app/home/components/hero-slider/hero-slider.component.ts
import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeatureCardsRowComponent } from '../feature-cards-row/feature-cards-row.component';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  imports: [CommonModule, FeatureCardsRowComponent],
  standalone: true,
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: HeroSlide[] = [
    {
      id: 's1',
      image: 'assets/images/hero/first-hero-banner.svg',
      title: 'Fueling School Growth.',
      subtitle: 'Powering African education through finance, partnerships, and technology.'
    },
    {
      id: 's2',
      image: 'assets/images/hero/second-hero-banner.svg',
      title: 'Connecting Schools. Fostering Growth.',
      subtitle: 'Flexible financing, expert advice and robust partnerships to support schools.'
    }
  ];

  // index of current slide shown
  current = 0;

  // whether autoplay is paused (hover / focus)
  isPaused = false;

  // autoplay interval (ms)
  private readonly autoplayMs = 5000;

  // used to stop RxJS stream in ngOnDestroy
  private readonly destroy$ = new Subject<void>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    // Run the interval outside Angular to avoid triggering change detection every tick.
    // Only when we actually change `current` we enter Angular zone to update the view.
    this.ngZone.runOutsideAngular(() => {
      interval(this.autoplayMs)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          // only update when not paused
          if (this.isPaused) return;

          // update slide inside Angular zone so change detection runs once per slide change
          this.ngZone.run(() => {
            try {
              this.current = (this.current + 1) % this.slides.length;
            } catch (err) {
              // defensive: log any unexpected errors and stop autoplay to avoid hang
              // eslint-disable-next-line no-console
              console.error('HeroSlider autoplay error:', err);
              // stop autoplay by completing the destroy$ subject
              this.destroy$.next();
              this.destroy$.complete();
            }
          });
        });
    });
  }

  ngOnDestroy(): void {
    // signal the interval subscription to stop and clean up
    this.destroy$.next();
    this.destroy$.complete();
  }

  // public controls called from template buttons
  setSlide(i: number) {
    // set from UI interactions inside Angular zone
    this.ngZone.run(() => {
      this.current = i % this.slides.length;
    });
  }

  prev() {
    this.ngZone.run(() => {
      this.current = (this.current - 1 + this.slides.length) % this.slides.length;
    });
  }

  next() {
    this.ngZone.run(() => {
      this.current = (this.current + 1) % this.slides.length;
    });
  }

  // pause/resume handlers for hover/focus
  onMouseEnter() {
    // run inside Angular so template bindings immediately reflect paused state if used
    this.ngZone.run(() => (this.isPaused = true));
  }

  onMouseLeave() {
    this.ngZone.run(() => (this.isPaused = false));
  }
}
