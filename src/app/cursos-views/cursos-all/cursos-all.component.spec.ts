import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAllComponent } from './cursos-all.component';

describe('CursosAllComponent', () => {
  let component: CursosAllComponent;
  let fixture: ComponentFixture<CursosAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
