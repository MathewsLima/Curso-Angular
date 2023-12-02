import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCostumizavelComponent } from './pipe-costumizavel.component';

describe('PipeCostumizavelComponent', () => {
  let component: PipeCostumizavelComponent;
  let fixture: ComponentFixture<PipeCostumizavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeCostumizavelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeCostumizavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
