import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctListingComponent } from './prouct-listing.component';

describe('ProuctListingComponent', () => {
  let component: ProuctListingComponent;
  let fixture: ComponentFixture<ProuctListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuctListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
