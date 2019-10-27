import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeBeerComponent } from './customize-beer.component';

describe('CustomizeBeerComponent', () => {
  let component: CustomizeBeerComponent;
  let fixture: ComponentFixture<CustomizeBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
