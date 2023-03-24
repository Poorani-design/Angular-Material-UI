import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypographyComponent } from './material-typography.component';

describe('MaterialTypographyComponent', () => {
  let component: MaterialTypographyComponent;
  let fixture: ComponentFixture<MaterialTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTypographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
