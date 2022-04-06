import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsintroComponent } from './stringsintro.component';

describe('StringsintroComponent', () => {
  let component: StringsintroComponent;
  let fixture: ComponentFixture<StringsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringsintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
