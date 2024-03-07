import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LechugaComponent } from './lechuga.component';

describe('LechugaComponent', () => {
  let component: LechugaComponent;
  let fixture: ComponentFixture<LechugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LechugaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LechugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
