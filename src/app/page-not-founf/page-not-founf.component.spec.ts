import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFounfComponent } from './page-not-founf.component';

describe('PageNotFounfComponent', () => {
  let component: PageNotFounfComponent;
  let fixture: ComponentFixture<PageNotFounfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFounfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFounfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
