import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquiavelComponent } from './maquiavel.component';

describe('MaquiavelComponent', () => {
  let component: MaquiavelComponent;
  let fixture: ComponentFixture<MaquiavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquiavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquiavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
