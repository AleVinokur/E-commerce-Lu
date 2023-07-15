import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadasComponent } from './portadas.component';

describe('PortadasComponent', () => {
  let component: PortadasComponent;
  let fixture: ComponentFixture<PortadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
