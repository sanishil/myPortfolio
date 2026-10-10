import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechArsenal } from './tech-arsenal';

describe('TechArsenal', () => {
  let component: TechArsenal;
  let fixture: ComponentFixture<TechArsenal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechArsenal],
    }).compileComponents();

    fixture = TestBed.createComponent(TechArsenal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
