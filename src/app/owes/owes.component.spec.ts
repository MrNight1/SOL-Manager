import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwesComponent } from './owes.component';

describe('OwesComponent', () => {
  let component: OwesComponent;
  let fixture: ComponentFixture<OwesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
