import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvtBstToGrtTreeComponent } from './convt-bst-to-grt-tree.component';

describe('ConvtBstToGrtTreeComponent', () => {
  let component: ConvtBstToGrtTreeComponent;
  let fixture: ComponentFixture<ConvtBstToGrtTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvtBstToGrtTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvtBstToGrtTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
