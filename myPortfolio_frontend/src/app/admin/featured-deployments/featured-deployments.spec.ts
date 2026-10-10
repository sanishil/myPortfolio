import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedDeployments } from './featured-deployments';

describe('FeaturedDeployments', () => {
  let component: FeaturedDeployments;
  let fixture: ComponentFixture<FeaturedDeployments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedDeployments],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedDeployments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
