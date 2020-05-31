import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostModelComponent } from './add-post-model.component';

describe('AddPostModelComponent', () => {
  let component: AddPostModelComponent;
  let fixture: ComponentFixture<AddPostModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
