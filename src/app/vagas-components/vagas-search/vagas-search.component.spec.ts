import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasSearchComponent } from './vagas-search.component';

describe('VagasSearchComponent', () => {
  let component: VagasSearchComponent;
  let fixture: ComponentFixture<VagasSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
