import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociadoComponent } from './negociado.component';

describe('NegociadoComponent', () => {
  let component: NegociadoComponent;
  let fixture: ComponentFixture<NegociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
