import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimBstComponent } from './trim-bst.component';

describe('TrimBstComponent', () => {
  let component: TrimBstComponent;
  let fixture: ComponentFixture<TrimBstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimBstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimBstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
