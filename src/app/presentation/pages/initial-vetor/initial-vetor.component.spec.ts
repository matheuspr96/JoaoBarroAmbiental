import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialVetorComponent } from './initial-vetor.component';

describe('InitialVetorComponent', () => {
  let component: InitialVetorComponent;
  let fixture: ComponentFixture<InitialVetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialVetorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialVetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
