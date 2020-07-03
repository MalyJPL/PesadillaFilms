import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasComponent } from './sillas.component';

describe('SillasComponent', () => {
  let component: SillasComponent;
  let fixture: ComponentFixture<SillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
