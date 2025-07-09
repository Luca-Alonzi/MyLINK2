import { Routes } from '@angular/router';
import { EmailCredentialsComponent } from './email-credentials/email-credentials.component';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'analytics',
        pathMatch: 'full'
    },
    { 
        path: 'analytics', 
        component: AnalyticsDashboardComponent 
    },
    { 
        path: 'email-credentials', 
        component: EmailCredentialsComponent 
    }
];