import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevendComponent } from './nevend.component';

describe('NevendComponent', () => {
  let component: NevendComponent;
  let fixture: ComponentFixture<NevendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
