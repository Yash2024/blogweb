import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongestCommonSubsequenceComponent } from './longest-common-subsequence.component';

describe('LongestCommonSubsequenceComponent', () => {
  let component: LongestCommonSubsequenceComponent;
  let fixture: ComponentFixture<LongestCommonSubsequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongestCommonSubsequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongestCommonSubsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
