import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponentComponent } from './intro-component.component';

describe('IntroComponentComponent', () => {
  let component: IntroComponentComponent;
  let fixture: ComponentFixture<IntroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
