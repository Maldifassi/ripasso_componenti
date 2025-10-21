import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio3 } from './esercizio3';

describe('Esercizio3', () => {
  let component: Esercizio3;
  let fixture: ComponentFixture<Esercizio3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
