import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// ROUTER
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WorldComponent } from './components/world/world.component';

// PIPES
import { FillPipe } from './pipes/fill.pipe';

// SERVICES
import { ClockService } from './services/clock.service';

// ROUTES
const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'world', component: WorldComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorldComponent,
    NavbarComponent,
    FillPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot()
  ],
  providers: [
    ClockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
