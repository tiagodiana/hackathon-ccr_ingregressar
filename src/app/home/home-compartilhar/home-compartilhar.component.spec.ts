import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompartilharComponent } from './home-compartilhar.component';

describe('HomeCompartilharComponent', () => {
  let component: HomeCompartilharComponent;
  let fixture: ComponentFixture<HomeCompartilharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompartilharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompartilharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
