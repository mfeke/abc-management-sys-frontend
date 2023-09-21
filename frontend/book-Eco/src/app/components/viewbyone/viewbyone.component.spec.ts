import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyoneComponent } from './viewbyone.component';

describe('ViewbyoneComponent', () => {
  let component: ViewbyoneComponent;
  let fixture: ComponentFixture<ViewbyoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewbyoneComponent]
    });
    fixture = TestBed.createComponent(ViewbyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
