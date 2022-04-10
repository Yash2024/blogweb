import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestRectangleInAHistogramComponent } from './largest-rectangle-in-a-histogram.component';

describe('LargestRectangleInAHistogramComponent', () => {
  let component: LargestRectangleInAHistogramComponent;
  let fixture: ComponentFixture<LargestRectangleInAHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargestRectangleInAHistogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargestRectangleInAHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
