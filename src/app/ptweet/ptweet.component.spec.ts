import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtweetComponent } from './ptweet.component';

describe('PtweetComponent', () => {
  let component: PtweetComponent;
  let fixture: ComponentFixture<PtweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
