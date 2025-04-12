import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAccComponent } from './chart-acc.component';

describe('ChartAccComponent', () => {
  let component: ChartAccComponent;
  let fixture: ComponentFixture<ChartAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
