import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputsChildsComponent } from './outputs-childs.component';

describe('OutputsChildsComponent', () => {
  let component: OutputsChildsComponent;
  let fixture: ComponentFixture<OutputsChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputsChildsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputsChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
