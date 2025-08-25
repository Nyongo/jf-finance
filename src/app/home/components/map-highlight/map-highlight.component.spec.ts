import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHighlightComponent } from './map-highlight.component';

describe('MapHighlightComponent', () => {
  let component: MapHighlightComponent;
  let fixture: ComponentFixture<MapHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
