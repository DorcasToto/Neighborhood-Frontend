import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhoodInfoComponent } from './viewhood-info.component';

describe('ViewhoodInfoComponent', () => {
  let component: ViewhoodInfoComponent;
  let fixture: ComponentFixture<ViewhoodInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhoodInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
