import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LRUCatchComponent } from './lru-catch.component';

describe('LRUCatchComponent', () => {
  let component: LRUCatchComponent;
  let fixture: ComponentFixture<LRUCatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LRUCatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LRUCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
