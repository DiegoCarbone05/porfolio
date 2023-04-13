import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGroupItemComponent } from './skill-group-item.component';

describe('SkillGroupItemComponent', () => {
  let component: SkillGroupItemComponent;
  let fixture: ComponentFixture<SkillGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillGroupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
