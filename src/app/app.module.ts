import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { MaterialsPageModule } from './materials/materials.module';
import { PipesModule } from '../app/pipes/pipes.module';
import { BuilderPageModule } from './builder/builder.module';
import { ImagesPageModule } from './images/images.module';
import { SendimagesPageModule } from './sendimages/sendimages.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CertificatePageModule } from './certificate/certificate.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [PipesModule, BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule
    , SendimagesPageModule, MaterialsPageModule, BuilderPageModule, ImagesPageModule, CertificatePageModule],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    Geolocation,
    ImagePicker,
    FileTransfer,
    FileTransferObject,
    FileChooser,
    File,
    FCM,
    Camera,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
