import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadorComponent } from './parador.component';

describe('ParadorComponent', () => {
  let component: ParadorComponent;
  let fixture: ComponentFixture<ParadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
