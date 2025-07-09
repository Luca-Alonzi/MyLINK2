import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EmailCredential {
  id: string;
  name: string;
  clientId: string;
  clientSecret: string;
  isActive: boolean;
  showSecret: boolean;
}

@Component({
  selector: 'app-email-credentials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-credentials.component.html',
  styleUrls: ['./email-credentials.component.css']
})
export class EmailCredentialsComponent implements OnInit {
  credentials: EmailCredential[] = [];
  showGenerateModal = false;
  newCredentialName = '';

  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    this.credentials = [
      {
        id: '1',
        name: 'Mail for Mylinkconnect',
        clientId: 'd6b65ad9-2fd6-40eb-b8f8-77d462ac3ed2',
        clientSecret: 'hidden-secret-1',
        isActive: true,
        showSecret: false
      },
      {
        id: '2',
        name: 'Test for MyLinkConnect',
        clientId: 'dd190047-0c9c-444c-b384-854da39d83ed',
        clientSecret: 'hidden-secret-2',
        isActive: true,
        showSecret: false
      }
    ];
  }

  generateCredentials(): void {
    this.showGenerateModal = true;
  }

  createCredential(): void {
    if (this.newCredentialName.trim()) {
      const newCredential: EmailCredential = {
        id: Date.now().toString(),
        name: this.newCredentialName,
        clientId: this.generateUUID(),
        clientSecret: this.generateSecret(),
        isActive: true,
        showSecret: false
      };
      this.credentials.push(newCredential);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.showGenerateModal = false;
    this.newCredentialName = '';
  }

  toggleActive(credential: EmailCredential): void {
    credential.isActive = !credential.isActive;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Could show a toast notification here
      console.log('Copied to clipboard');
    });
  }

  resetSecret(credential: EmailCredential): void {
    if (confirm('Are you sure you want to reset the client secret? This action cannot be undone.')) {
      credential.clientSecret = this.generateSecret();
      credential.showSecret = true;
      setTimeout(() => {
        credential.showSecret = false;
      }, 5000);
    }
  }

  deleteCredential(credential: EmailCredential): void {
    if (confirm(`Are you sure you want to delete "${credential.name}"? This action cannot be undone.`)) {
      this.credentials = this.credentials.filter(c => c.id !== credential.id);
    }
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private generateSecret(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  refreshTable(): void {
    this.loadCredentials();
  }
}