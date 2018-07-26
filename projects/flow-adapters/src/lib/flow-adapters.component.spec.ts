import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowAdaptersComponent } from './flow-adapters.component';

describe('FlowAdaptersComponent', () => {
  let component: FlowAdaptersComponent;
  let fixture: ComponentFixture<FlowAdaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowAdaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowAdaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
