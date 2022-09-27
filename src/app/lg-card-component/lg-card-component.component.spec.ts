import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardComponentComponent } from './lg-card-component.component';

describe('LgCardComponentComponent', () => {
  let component: LgCardComponentComponent;
  let fixture: ComponentFixture<LgCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
