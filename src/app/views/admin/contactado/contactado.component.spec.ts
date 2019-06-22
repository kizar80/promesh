import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactadoComponent } from './contactado.component';

describe('ContactadoComponent', () => {
  let component: ContactadoComponent;
  let fixture: ComponentFixture<ContactadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
