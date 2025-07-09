import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <!-- Navigation Sidebar -->
      <nav class="sidebar">
        <div class="sidebar-header">
          <h2>myLINK</h2>
        </div>
        <ul class="nav-menu">
          <li class="nav-item" [class.active]="isActiveRoute('/analytics')">
            <a (click)="navigateTo('/analytics')" class="nav-link">
              <span class="nav-icon">📊</span>
              <span class="nav-text">Analytics</span>
            </a>
            <ul class="sub-menu">
              <li><a (click)="navigateTo('/analytics')" class="sub-link" [class.active]="isActiveRoute('/analytics')">Statistics</a></li>
              <li><a href="#" class="sub-link">Message logs</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="nav-icon">📄</span>
              <span class="nav-text">Templates</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="nav-icon">📞</span>
              <span class="nav-text">Numbers</span>
            </a>
          </li>
          <li class="nav-item" [class.active]="isActiveRoute('/email-credentials')">
            <a (click)="navigateTo('/email-credentials')" class="nav-link">
              <span class="nav-icon">🔧</span>
              <span class="nav-text">Messaging APIs</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="nav-icon">📧</span>
              <span class="nav-text">MarketingPlatform</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="nav-icon">🔄</span>
              <span class="nav-text">Callbacks</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Top Header -->
        <header class="top-header">
          <div class="search-container">
            <input type="text" placeholder="Search for numbers, message id, SMS content" class="search-input">
            <button class="search-btn">🔍</button>
          </div>
          <div class="user-info">
            <span class="user-initials">LA</span>
            <span class="user-name">Luca Alonzi</span>
            <span class="company-name">LINK Mobility Group AS</span>
          </div>
        </header>

        <!-- Router Outlet -->
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
      background-color: #f5f5f5;
    }

    .sidebar {
      width: 250px;
      background-color: #001529;
      color: white;
      padding: 0;
      overflow-y: auto;
    }

    .sidebar-header {
      padding: 20px;
      border-bottom: 1px solid #002140;
    }

    .sidebar-header h2 {
      margin: 0;
      color: #1890ff;
      font-size: 18px;
      font-weight: 600;
    }

    .nav-menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-item {
      border-bottom: 1px solid #002140;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      color: #ffffff;
      text-decoration: none;
      transition: background-color 0.2s;
      cursor: pointer;
    }

    .nav-link:hover,
    .nav-item.active .nav-link {
      background-color: #1890ff;
    }

    .nav-icon {
      font-size: 16px;
      width: 16px;
      text-align: center;
    }

    .nav-text {
      font-size: 14px;
    }

    .sub-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: #000c17;
    }

    .sub-link {
      display: block;
      padding: 12px 20px 12px 48px;
      color: #bfbfbf;
      text-decoration: none;
      font-size: 13px;
      transition: all 0.2s;
      cursor: pointer;
    }

    .sub-link:hover,
    .sub-link.active {
      color: #1890ff;
      background-color: #111a2c;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      background-color: #fff;
      border-bottom: 1px solid #f0f0f0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .search-container {
      display: flex;
      align-items: center;
      flex: 1;
      max-width: 400px;
    }

    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #d9d9d9;
      border-radius: 6px 0 0 6px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: #1890ff;
    }

    .search-btn {
      padding: 8px 12px;
      border: 1px solid #d9d9d9;
      border-left: none;
      border-radius: 0 6px 6px 0;
      background-color: #fafafa;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s;
    }

    .search-btn:hover {
      background-color: #1890ff;
      color: white;
      border-color: #1890ff;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: #595959;
    }

    .user-initials {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #1890ff;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 12px;
    }

    .user-name {
      font-weight: 600;
      color: #262626;
    }

    .company-name {
      color: #8c8c8c;
    }

    @media (max-width: 768px) {
      .sidebar {
        width: 60px;
      }
      
      .nav-text {
        display: none;
      }
      
      .sidebar-header h2 {
        display: none;
      }
      
      .user-info {
        display: none;
      }
      
      .search-container {
        max-width: 200px;
      }
    }
  `]
})
export class AppComponent {
  title = 'MyLINK2';

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}