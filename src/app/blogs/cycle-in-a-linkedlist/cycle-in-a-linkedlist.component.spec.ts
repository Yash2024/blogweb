import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleInALinkedlistComponent } from './cycle-in-a-linkedlist.component';

describe('CycleInALinkedlistComponent', () => {
  let component: CycleInALinkedlistComponent;
  let fixture: ComponentFixture<CycleInALinkedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleInALinkedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleInALinkedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
