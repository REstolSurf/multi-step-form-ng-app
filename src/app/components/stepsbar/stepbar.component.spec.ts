import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepbarComponent } from './stepbar.component';

describe('StepbarComponent', () => {
  let component: StepbarComponent;
  let fixture: ComponentFixture<StepbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepbarComponent]
    });
    fixture = TestBed.createComponent(StepbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
