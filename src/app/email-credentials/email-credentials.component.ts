import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface EmailCredential {
  id: string;
  email: string;
  provider: string;
  username: string;
  lastAccessed: Date;
  isActive: boolean;
}

@Component({
  selector: 'app-email-credentials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-credentials.component.html',
  styleUrls: ['./email-credentials.component.css']
})
export class EmailCredentialsComponent implements OnInit {
  emailCredentials: EmailCredential[] = [];
  showAddForm = false;
  showEditForm = false;
  editingCredential: EmailCredential | null = null;
  
  newCredential: Partial<EmailCredential> = {
    email: '',
    provider: '',
    username: '',
    isActive: true
  };

  providers = ['Gmail', 'Outlook', 'Yahoo', 'ProtonMail', 'Other'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadEmailCredentials();
  }

  loadEmailCredentials(): void {
    // In a real application, this would load from a service
    this.emailCredentials = [
      {
        id: '1',
        email: 'user@example.com',
        provider: 'Gmail',
        username: 'user',
        lastAccessed: new Date('2025-01-08'),
        isActive: true
      },
      {
        id: '2',
        email: 'work@company.com',
        provider: 'Outlook',
        username: 'work.user',
        lastAccessed: new Date('2025-01-07'),
        isActive: true
      }
    ];
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    this.showEditForm = false;
    this.resetNewCredential();
  }

  addCredential(): void {
    if (this.newCredential.email && this.newCredential.provider && this.newCredential.username) {
      const credential: EmailCredential = {
        id: Date.now().toString(),
        email: this.newCredential.email,
        provider: this.newCredential.provider,
        username: this.newCredential.username,
        lastAccessed: new Date(),
        isActive: true
      };
      
      this.emailCredentials.push(credential);
      this.showAddForm = false;
      this.resetNewCredential();
    }
  }

  editCredential(credential: EmailCredential): void {
    this.editingCredential = { ...credential };
    this.showEditForm = true;
    this.showAddForm = false;
  }

  updateCredential(): void {
    if (this.editingCredential) {
      const index = this.emailCredentials.findIndex(c => c.id === this.editingCredential!.id);
      if (index !== -1) {
        this.emailCredentials[index] = { ...this.editingCredential };
        this.showEditForm = false;
        this.editingCredential = null;
      }
    }
  }

  deleteCredential(id: string): void {
    if (confirm('Are you sure you want to delete this email credential?')) {
      this.emailCredentials = this.emailCredentials.filter(c => c.id !== id);
    }
  }

  toggleActive(credential: EmailCredential): void {
    credential.isActive = !credential.isActive;
  }

  cancelEdit(): void {
    this.showEditForm = false;
    this.editingCredential = null;
  }

  resetNewCredential(): void {
    this.newCredential = {
      email: '',
      provider: '',
      username: '',
      isActive: true
    };
  }

  navigateBack(): void {
    this.router.navigate(['/analytics']);
  }
}