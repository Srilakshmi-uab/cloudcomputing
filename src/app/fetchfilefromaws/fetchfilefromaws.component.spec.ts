import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchfilefromawsComponent } from './fetchfilefromaws.component';

describe('FetchfilefromawsComponent', () => {
  let component: FetchfilefromawsComponent;
  let fixture: ComponentFixture<FetchfilefromawsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchfilefromawsComponent]
    });
    fixture = TestBed.createComponent(FetchfilefromawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
