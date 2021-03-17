import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { AppComponent } from './app.component';
import { COMPANY_NAME } from './app.constants';
import { HeaderComponent } from './core/header/header.component';
import { NavigationBarComponent } from './core/navigation-bar/navigation-bar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavigationBarComponent,
        HeaderComponent,
        Breadcrumb
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'buildxact'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(COMPANY_NAME);
  });
});
