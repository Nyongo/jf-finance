import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactUsService } from '../../services/jf-network-contact-page.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  @Input() messageType: 'PARTNER' | 'ENQUIRY' | 'NORMAL' = 'NORMAL';
  @Input() platform: 'JF_NETWORK' | 'JF_FOUNDATION' | 'JF_FINANCE' | 'JF_HUB' = 'JF_FINANCE';
  pageName = 'Contact Us';

  form!: FormGroup;
  submitted = false;
  success = false;
  loading = false;
  errorOccurred = false;

  constructor(private fb: FormBuilder, private contactUsService: ContactUsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get title() {
    return this.messageType === 'PARTNER' ? 'Partner With Us' : 'Contact Us';
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;

    const payload = {
      ...this.form.value,
      messageType: this.messageType,
      platform: this.platform,
    };
    this.loading = true;

    this.contactUsService.sendMessage(payload).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.form.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.success = false;
        this.loading = false;
        this.errorOccurred = true;
        console.error('Error sending message', err);
      }
    });
  }
}