import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInABstComponent } from './search-in-a-bst.component';

describe('SearchInABstComponent', () => {
  let component: SearchInABstComponent;
  let fixture: ComponentFixture<SearchInABstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInABstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInABstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
