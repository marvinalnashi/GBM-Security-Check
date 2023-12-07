import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLItemsComponent } from './url-items.component';

describe('URLItemsComponent', () => {
  let component: URLItemsComponent;
  let fixture: ComponentFixture<URLItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URLItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(URLItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
