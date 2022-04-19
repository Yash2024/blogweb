import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverBstComponent } from './recover-bst.component';

describe('RecoverBstComponent', () => {
  let component: RecoverBstComponent;
  let fixture: ComponentFixture<RecoverBstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverBstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverBstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
