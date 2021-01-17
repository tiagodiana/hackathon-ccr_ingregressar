import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasDetailsComponent } from './vagas-details.component';

describe('VagasDetailsComponent', () => {
  let component: VagasDetailsComponent;
  let fixture: ComponentFixture<VagasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
