import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatCardComponentComponent } from './lat-card-component.component';

describe('LatCardComponentComponent', () => {
  let component: LatCardComponentComponent;
  let fixture: ComponentFixture<LatCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
