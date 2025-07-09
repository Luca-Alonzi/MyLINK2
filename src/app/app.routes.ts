import { Routes } from '@angular/router';
import { EmailCredentialsComponent } from './email-credentials/email-credentials.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },
    { path: 'email-credentials', component: EmailCredentialsComponent }
];
