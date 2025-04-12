import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAppComponent } from './chart-app.component';

describe('ChartAppComponent', () => {
  let component: ChartAppComponent;
  let fixture: ComponentFixture<ChartAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
