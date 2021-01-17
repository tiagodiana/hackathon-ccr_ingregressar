import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasUserComponent } from './vagas-user.component';

describe('VagasUserComponent', () => {
  let component: VagasUserComponent;
  let fixture: ComponentFixture<VagasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
