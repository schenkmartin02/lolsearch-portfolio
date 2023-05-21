import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryPointComponent } from './mastery-point.component';

describe('MasteryPointComponent', () => {
  let component: MasteryPointComponent;
  let fixture: ComponentFixture<MasteryPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteryPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
