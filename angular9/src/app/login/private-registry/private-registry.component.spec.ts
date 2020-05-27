import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRegistryComponent } from './private-registry.component';

describe('PrivateRegistryComponent', () => {
  let component: PrivateRegistryComponent;
  let fixture: ComponentFixture<PrivateRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
