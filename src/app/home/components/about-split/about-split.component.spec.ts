import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSplitComponent } from './about-split.component';

describe('AboutSplitComponent', () => {
  let component: AboutSplitComponent;
  let fixture: ComponentFixture<AboutSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSplitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
