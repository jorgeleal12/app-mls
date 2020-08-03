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
import { NewCertificatePageModule } from './new-certificate/new-certificate.module';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AlertImagePageModule } from './alert-image/alert-image.module';
import { ViewImagePageModule } from './view-image/view-image.module';
import { NewClientPageModule } from './new-client/new-client.module';
import { ListAcountPageModule } from './list-acount/list-acount.module';
import { NewAcountPageModule } from './new-acount/new-acount.module';
import { CityPageModule } from './city/city.module';
import { NewMaterialPageModule } from './new-material/new-material.module';
import { NewBuilderPageModule } from './new-builder/new-builder.module';
import { ClientServicePageModule } from './client-service/client-service.module';
import { AcountServicePageModule } from './acount-service/acount-service.module';
import { ViewDocumentPageModule } from './view-document/view-document.module';
import { ZoomImagePageModule } from './zoom-image/zoom-image.module';
import { SendImagePageModule } from './send-image/send-image.module';
import { ViewImageSPageModule } from './view-image-s/view-image-s.module';
import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [PipesModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    SendimagesPageModule,
    MaterialsPageModule,
    BuilderPageModule,
    ImagesPageModule,
    ViewImagePageModule,
    CertificatePageModule,
    NewCertificatePageModule,
    AlertImagePageModule,
    ListAcountPageModule,
    NewAcountPageModule,
    CityPageModule,
    NewMaterialPageModule,
    NewBuilderPageModule,
    ClientServicePageModule,
    AcountServicePageModule,
    ViewDocumentPageModule,
    ZoomImagePageModule,
    NewClientPageModule,
    SendImagePageModule,
    ViewImageSPageModule

  ],
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
    SQLite,
    LocalNotifications,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
