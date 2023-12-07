import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPItemsComponent } from './ip-items.component';

describe('IPItemsComponent', () => {
  let component: IPItemsComponent;
  let fixture: ComponentFixture<IPItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
