import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResponsivoComponent } from './nav-responsivo.component';

describe('NavResponsivoComponent', () => {
  let component: NavResponsivoComponent;
  let fixture: ComponentFixture<NavResponsivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavResponsivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
