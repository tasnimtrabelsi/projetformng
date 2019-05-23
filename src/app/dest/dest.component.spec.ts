import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestComponent } from './dest.component';

describe('DestComponent', () => {
  let component: DestComponent;
  let fixture: ComponentFixture<DestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
