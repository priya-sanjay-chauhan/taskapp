import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableChildComponent } from './reusable-child.component';

describe('ReusableChildComponent', () => {
  let component: ReusableChildComponent;
  let fixture: ComponentFixture<ReusableChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
