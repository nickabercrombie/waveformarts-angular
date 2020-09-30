import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaudioComponent } from './postaudio.component';

describe('PostaudioComponent', () => {
  let component: PostaudioComponent;
  let fixture: ComponentFixture<PostaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostaudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
