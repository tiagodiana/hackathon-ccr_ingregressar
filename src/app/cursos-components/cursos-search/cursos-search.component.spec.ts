import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosSearchComponent } from './cursos-search.component';

describe('CursosSearchComponent', () => {
  let component: CursosSearchComponent;
  let fixture: ComponentFixture<CursosSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
