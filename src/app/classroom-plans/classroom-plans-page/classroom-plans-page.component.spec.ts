import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomPlansPageComponent } from './classroom-plans-page.component';

describe('ClassroomPlansPageComponent', () => {
  let component: ClassroomPlansPageComponent;
  let fixture: ComponentFixture<ClassroomPlansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomPlansPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
