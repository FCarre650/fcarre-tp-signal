import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductivityTracker } from './productivity-tracker';

describe('ProductivityTracker', () => {
  let component: ProductivityTracker;
  let fixture: ComponentFixture<ProductivityTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductivityTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
