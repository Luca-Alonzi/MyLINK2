import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatCard {
  title: string;
  value: string;
  percentage: string;
  trend: string;
  icon: string;
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css']
})
export class AnalyticsDashboardComponent implements OnInit {
  
  dateRange: string = 'Last 7 days - 02.07.2025 - 09.07.2025';
  selectedView: string = 'SMS parts';
  
  statCards: StatCard[] = [
    {
      title: 'Number of messages sent',
      value: '18',
      percentage: '0%',
      trend: '18 vs 18 messages in the previous 7 days',
      icon: 'send'
    },
    {
      title: 'Number of messages received',
      value: '0',
      percentage: '0%',
      trend: '0 vs 0 messages in the previous 7 days',
      icon: 'receive'
    },
    {
      title: 'Delivery rate',
      value: '0.00%',
      percentage: '0%',
      trend: '0 delivered messages',
      icon: 'delivery'
    },
    {
      title: 'Failure rate',
      value: '100.00%',
      percentage: '0%',
      trend: '18 failed messages',
      icon: 'warning'
    }
  ];

  messageStatusData: ChartData[] = [
    { name: 'Delivery success', value: 0, color: '#52c41a' },
    { name: 'Delivery failure', value: 100, color: '#ff4d4f' },
    { name: 'In process', value: 0, color: '#1890ff' }
  ];

  deliveryFailureData: ChartData[] = [
    { name: 'Invalid recipient', value: 66.67, color: '#1890ff' },
    { name: 'Internal system error', value: 33.33, color: '#722ed1' }
  ];

  dailyTrafficData = [
    { date: '2025-07-02', sent: 3, failed: 3 },
    { date: '2025-07-03', sent: 2, failed: 2 },
    { date: '2025-07-04', sent: 2, failed: 2 },
    { date: '2025-07-05', sent: 0, failed: 0 },
    { date: '2025-07-06', sent: 1, failed: 1 },
    { date: '2025-07-07', sent: 1, failed: 1 },
    { date: '2025-07-08', sent: 2, failed: 2 },
    { date: '2025-07-09', sent: 7, failed: 7 }
  ];

  countryData = [
    { country: 'France', totalSent: 12, deliverySuccess: 0, inProcess: 0, deliveryFailure: 12 },
    { country: 'Uncertain', totalSent: 6, deliverySuccess: 0, inProcess: 0, deliveryFailure: 6 }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  onDateRangeChange(): void {
    // Handle date range change
    console.log('Date range changed');
  }

  onFilterClick(): void {
    // Handle filter click
    console.log('Filter clicked');
  }

  onViewToggle(view: string): void {
    this.selectedView = view;
    console.log('View toggled to:', view);
  }

  getChartPercentage(value: number, total: number): number {
    return total > 0 ? (value / total) * 100 : 0;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  }
}