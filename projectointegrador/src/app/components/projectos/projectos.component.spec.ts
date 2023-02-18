import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosComponent } from './projectos.component';

describe('ProjectosComponent', () => {
  let component: ProjectosComponent;
  let fixture: ComponentFixture<ProjectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
