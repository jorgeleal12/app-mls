import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';


@Injectable({
  providedIn: 'root'
})
export class SqlstoreService {

  db: SQLiteObject = null;



  constructor() { }


  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }



  InsertOdi(data) {

    let sql = 'INSERT INTO asignadas(idphotos,name_photo, actual,quantity,min,odi_idodi,idservice_certifications) VALUES(?,?,?,?,?,?,?)';
    //  return this.db.executeSql(sql, [image.idphotos, image.name_photo, 0, image.quantity, image.min, odi, idservice]);
  }

  Select_type_service(type) {
    let sql = 'SELECT * FROM type_network WHERE type_service_idtype_service=?';
    return this.db.executeSql(sql, [type])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

}
