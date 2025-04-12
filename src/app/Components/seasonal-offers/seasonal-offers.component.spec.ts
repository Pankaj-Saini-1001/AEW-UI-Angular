import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalOffersComponent } from './seasonal-offers.component';

describe('SeasonalOffersComponent', () => {
  let component: SeasonalOffersComponent;
  let fixture: ComponentFixture<SeasonalOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
