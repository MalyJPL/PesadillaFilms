import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TybaEmpresaComponent } from './tyba-empresa.component';

describe('TybaEmpresaComponent', () => {
  let component: TybaEmpresaComponent;
  let fixture: ComponentFixture<TybaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TybaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TybaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
