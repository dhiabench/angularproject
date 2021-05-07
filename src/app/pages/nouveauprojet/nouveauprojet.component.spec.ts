import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauprojetComponent } from './nouveauprojet.component';

describe('NouveauprojetComponent', () => {
  let component: NouveauprojetComponent;
  let fixture: ComponentFixture<NouveauprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
