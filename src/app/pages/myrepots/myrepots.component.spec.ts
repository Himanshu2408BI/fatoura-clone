import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrepotsComponent } from './myrepots.component';

describe('MyrepotsComponent', () => {
  let component: MyrepotsComponent;
  let fixture: ComponentFixture<MyrepotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrepotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
