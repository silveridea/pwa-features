import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CameraHardwareComponent } from './camera-hardware/camera-hardware.component';
import { CameraSoftwareComponent } from './camera-software/camera-software.component';
import { PushWithHtml5Component } from './push-with-html5/push-with-html5.component';
import { PushWithServiceWorkerComponent } from './push-with-service-worker/push-with-service-worker.component';
import { OrientationComponent } from './orientation/orientation.component';
import { MotionComponent } from './motion/motion.component';
import { IsSecureGuard } from './common/guards/issecure.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [IsSecureGuard] },
  { path: 'home', component: HomeComponent, canActivate: [IsSecureGuard] },
  { path: 'camerahard', component: CameraHardwareComponent, canActivate: [IsSecureGuard] },
  { path: 'camerasoft', component: CameraSoftwareComponent, canActivate: [IsSecureGuard] },
  { path: 'pushhtml5', component: PushWithHtml5Component, canActivate: [IsSecureGuard] },
  { path: 'pushworker', component: PushWithServiceWorkerComponent, canActivate: [IsSecureGuard] },
  { path: 'motion', component: MotionComponent, canActivate: [IsSecureGuard] },
  { path: 'gyro', component: OrientationComponent, canActivate: [IsSecureGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
