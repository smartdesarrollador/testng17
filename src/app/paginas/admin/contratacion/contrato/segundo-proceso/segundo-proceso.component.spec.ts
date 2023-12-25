import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoProcesoComponent } from './segundo-proceso.component';

describe('SegundoProcesoComponent', () => {
  let component: SegundoProcesoComponent;
  let fixture: ComponentFixture<SegundoProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundoProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
