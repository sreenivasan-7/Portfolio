import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByfCardComponentComponent } from './byf-card-component.component';

describe('ByfCardComponentComponent', () => {
  let component: ByfCardComponentComponent;
  let fixture: ComponentFixture<ByfCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByfCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByfCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
