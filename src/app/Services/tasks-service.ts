import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  db: SQLiteObject = null;



  constructor() { }


  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }

  createTableImage() {
    let sql = 'CREATE TABLE IF NOT EXISTS image(id INTEGER PRIMARY KEY AUTOINCREMENT,idphotos INTEGER, name_photo TEXT, actual INTEGER, quantity INTEGER, min INTEGER,  odi_idodi INTEGER, idservice_certifications INTEGER)';
    return this.db.executeSql(sql, []);
  }

  InsertImage(odi, image) {
    let sql = 'INSERT INTO image(idphotos,name_photo, actual,quantity,min,odi_idodi,idservice_certifications) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [image.idphotos, image.name_photo, 0, image.quantity, image.min, odi, 12]);
  }

  SelectImage(odi_idodi) {

    let sql = 'SELECT * FROM image WHERE odi_idodi=?';
    return this.db.executeSql(sql, [odi_idodi])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));

  }

  SelectImageOne(idphotos, odi_idodi, certificate) {

    let sql = 'SELECT * FROM image WHERE idphotos=? and odi_idodi=? and idservice_certifications=?';
    return this.db.executeSql(sql, [idphotos, odi_idodi, certificate])
      .then(response => {
        console.log(response)
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));

  }

  update(idphotos, odi_idodi, certificate, number) {

    let sql = 'UPDATE image SET actual=? WHERE idphotos=? and odi_idodi=? and idservice_certifications=?';
    return this.db.executeSql(sql, [number, idphotos, odi_idodi, certificate]);
  }

}
