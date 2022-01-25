import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBeverageComponent } from './footer-beverage.component';

describe('FooterBeverageComponent', () => {
  let component: FooterBeverageComponent;
  let fixture: ComponentFixture<FooterBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBeverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
