import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicHeroComponent } from './dinamic-hero.component';

describe('DinamicHeroComponent', () => {
  let component: DinamicHeroComponent;
  let fixture: ComponentFixture<DinamicHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
