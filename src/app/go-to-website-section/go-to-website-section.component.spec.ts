import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToWebsiteSectionComponent } from './go-to-website-section.component';

describe('GoToWebsiteSectionComponent', () => {
  let component: GoToWebsiteSectionComponent;
  let fixture: ComponentFixture<GoToWebsiteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToWebsiteSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToWebsiteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
