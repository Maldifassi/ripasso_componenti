import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio2 } from './esercizio2';

describe('Esercizio2', () => {
  let component: Esercizio2;
  let fixture: ComponentFixture<Esercizio2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
