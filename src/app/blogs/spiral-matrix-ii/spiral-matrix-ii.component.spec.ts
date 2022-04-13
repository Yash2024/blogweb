import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralMatrixIIComponent } from './spiral-matrix-ii.component';

describe('SpiralMatrixIIComponent', () => {
  let component: SpiralMatrixIIComponent;
  let fixture: ComponentFixture<SpiralMatrixIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiralMatrixIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiralMatrixIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
