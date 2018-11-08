import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelPageComponent } from './excel-page.component';

describe('ExcelPageComponent', () => {
  let component: ExcelPageComponent;
  let fixture: ComponentFixture<ExcelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
