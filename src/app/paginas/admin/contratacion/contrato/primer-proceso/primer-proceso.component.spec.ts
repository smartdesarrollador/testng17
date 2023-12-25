import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerProcesoComponent } from './primer-proceso.component';

describe('PrimerProcesoComponent', () => {
  let component: PrimerProcesoComponent;
  let fixture: ComponentFixture<PrimerProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimerProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
