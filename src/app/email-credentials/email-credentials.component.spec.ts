import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCredentialsComponent } from './email-credentials.component';

describe('EmailCredentialsComponent', () => {
  let component: EmailCredentialsComponent;
  let fixture: ComponentFixture<EmailCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCredentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
