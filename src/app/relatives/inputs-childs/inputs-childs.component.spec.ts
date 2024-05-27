import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsChildsComponent } from './inputs-childs.component';

describe('InputsChildsComponent', () => {
  let component: InputsChildsComponent;
  let fixture: ComponentFixture<InputsChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsChildsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
