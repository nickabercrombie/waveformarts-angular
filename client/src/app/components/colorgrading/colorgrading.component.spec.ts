import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorgradingComponent } from './colorgrading.component';

describe('ColorgradingComponent', () => {
  let component: ColorgradingComponent;
  let fixture: ComponentFixture<ColorgradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorgradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorgradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
