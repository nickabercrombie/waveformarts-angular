import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionaudioComponent } from './productionaudio.component';

describe('ProductionaudioComponent', () => {
  let component: ProductionaudioComponent;
  let fixture: ComponentFixture<ProductionaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionaudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
