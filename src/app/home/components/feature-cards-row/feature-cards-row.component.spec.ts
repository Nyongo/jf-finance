import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardsRowComponent } from './feature-cards-row.component';

describe('FeatureCardsRowComponent', () => {
  let component: FeatureCardsRowComponent;
  let fixture: ComponentFixture<FeatureCardsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
