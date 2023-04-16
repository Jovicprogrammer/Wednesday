import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeladonaComponent } from './beladona.component';

describe('BeladonaComponent', () => {
  let component: BeladonaComponent;
  let fixture: ComponentFixture<BeladonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeladonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeladonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
