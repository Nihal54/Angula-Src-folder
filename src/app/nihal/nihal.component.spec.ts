import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NihalComponent } from './nihal.component';

describe('NihalComponent', () => {
  let component: NihalComponent;
  let fixture: ComponentFixture<NihalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NihalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NihalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
