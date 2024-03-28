import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoIconComponent } from './seo-icon.component';

describe('SeoIconComponent', () => {
  let component: SeoIconComponent;
  let fixture: ComponentFixture<SeoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
