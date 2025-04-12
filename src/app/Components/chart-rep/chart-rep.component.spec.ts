import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRepComponent } from './chart-rep.component';

describe('ChartRepComponent', () => {
  let component: ChartRepComponent;
  let fixture: ComponentFixture<ChartRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
