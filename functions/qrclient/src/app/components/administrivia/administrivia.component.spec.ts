import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministriviaComponent } from './administrivia.component';

describe('AdministriviaComponent', () => {
  let component: AdministriviaComponent;
  let fixture: ComponentFixture<AdministriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministriviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
