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


  InsertImage(odi, image, idservice) {
    let sql = 'INSERT INTO image(idphotos,name_photo, actual,quantity,min,odi_idodi,idservice_certifications) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [image.idphotos, image.name_photo, 0, image.quantity, image.min, odi, idservice]);
  }

  SelectImage(odi_idodi, idservice) {

    let sql = 'SELECT * FROM image WHERE odi_idodi=? and idservice_certifications=?';
    return this.db.executeSql(sql, [odi_idodi, idservice])
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

  delete(odi_idodi, certificate) {
    let sql = 'DELETE  FROM image WHERE odi_idodi=? and idservice_certifications=?';
    return this.db.executeSql(sql, [odi_idodi, certificate]);
  }


  createTableImageCertificate() {
    let sql = 'CREATE TABLE IF NOT EXISTS imagecert(id INTEGER PRIMARY KEY AUTOINCREMENT,idphotos INTEGER, name_photo TEXT, odi_idodi INTEGER, certifications INTEGER)';
    return this.db.executeSql(sql, []);
  }

  InsertICertificate(image, type, odi, idservice) {
    console.log(odi)
    console.log(image)
    console.log(type)
    console.log(idservice)

    let sql = 'INSERT INTO imagecert(idphotos,name_photo, odi_idodi,certifications) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [type, image, odi, idservice]);
  }

  SelectICertificate() {
    let sql = 'SELECT * FROM imagecert';
    return this.db.executeSql(sql, [])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));

  }
  DeleteImageCertificado(id) {
    let sql = 'DELETE  FROM imagecert WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }


}
