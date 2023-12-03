import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpemploServicos1Component } from './expemplo-servicos1.component';

describe('ExpemploServicos1Component', () => {
  let component: ExpemploServicos1Component;
  let fixture: ComponentFixture<ExpemploServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpemploServicos1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpemploServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
