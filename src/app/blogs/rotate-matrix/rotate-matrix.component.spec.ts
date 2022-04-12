import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateMatrixComponent } from './rotate-matrix.component';

describe('RotateMatrixComponent', () => {
  let component: RotateMatrixComponent;
  let fixture: ComponentFixture<RotateMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
