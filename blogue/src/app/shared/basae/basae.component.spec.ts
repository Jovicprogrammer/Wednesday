import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasaeComponent } from './basae.component';

describe('BasaeComponent', () => {
  let component: BasaeComponent;
  let fixture: ComponentFixture<BasaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
