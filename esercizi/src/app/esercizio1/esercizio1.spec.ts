import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio1 } from './esercizio1';

describe('Esercizio1', () => {
  let component: Esercizio1;
  let fixture: ComponentFixture<Esercizio1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
