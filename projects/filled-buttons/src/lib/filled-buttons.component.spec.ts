import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledButtonsComponent } from './filled-buttons.component';

describe('FilledButtonsComponent', () => {
  let component: FilledButtonsComponent;
  let fixture: ComponentFixture<FilledButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
