import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhimCardComponentComponent } from './bhim-card-component.component';

describe('BhimCardComponentComponent', () => {
  let component: BhimCardComponentComponent;
  let fixture: ComponentFixture<BhimCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhimCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhimCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
