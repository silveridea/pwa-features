// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { environment } from '../environments/environment';

// services
import { PushNotificationService } from 'ngx-push-notifications';
// guards
import { IsSecureGuard } from './common/guards/issecure.guard';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OrientationComponent } from './orientation/orientation.component';
import { MotionComponent } from './motion/motion.component';
import { PushWithServiceWorkerComponent } from './push-with-service-worker/push-with-service-worker.component';
import { PushWithHtml5Component } from './push-with-html5/push-with-html5.component';
import { CameraHardwareComponent } from './camera-hardware/camera-hardware.component';
import { CameraSoftwareComponent } from './camera-software/camera-software.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OrientationComponent,
    MotionComponent,
    PushWithServiceWorkerComponent,
    PushWithHtml5Component,
    CameraHardwareComponent,
    CameraSoftwareComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    // this creates singleton services that are shared between components
    PushNotificationService,
    IsSecureGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
