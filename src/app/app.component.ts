import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM, } from '@ionic-native/fcm/ngx';
import { timer } from 'rxjs'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SQLite, } from '@ionic-native/sqlite/ngx';
import { TasksService } from './Services/tasks-service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private localNotifications: LocalNotifications,
    private sqlite: SQLite,
    private tasksService: TasksService

  ) {

    this.initializeApp();
  }


  createDatabase() {

    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
      .then((db) => {
        this.tasksService.setDatabase(db);
        return this.tasksService.createTableImage();
        // return this.tasksService.createTableImageCertificate();
      })
      .then(() => {

      })
      .catch(error => {
        console.error(error);
      });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)

      if (this.platform.is('android')) {
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#000000');
      }

      this.fcm.getToken().then((token: String) => console.log('este es el token' + token)).catch(error => {

      });


      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log('segundo plano' + JSON.stringify(data))
        } else {
          console.log('primer plano' + JSON.stringify(data))
          this.localNotifications.schedule({
            id: Math.floor((Math.random() * 100) + 1),
            title: 'Programación',
            text: 'Hay servicios Nuevos',

          })
        }
      }, error => {
        console.log('error' + error)
      })


      this.createDatabase();

    });
  }
}
