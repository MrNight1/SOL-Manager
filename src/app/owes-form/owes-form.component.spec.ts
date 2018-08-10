import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwesFormComponent } from './owes-form.component';

describe('OwesFormComponent', () => {
  let component: OwesFormComponent;
  let fixture: ComponentFixture<OwesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
