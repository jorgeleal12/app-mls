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

  createTableOdi() {
    let sql = 'CREATE TABLE IF NOT EXISTS asignadas(id INTEGER PRIMARY KEY AUTOINCREMENT,idodi INTEGER,address1 TEXT,barrio TEXT, city  INTEGER, client INTEGER, company_idcompany INTEGER, contract_idcontract INTEGER, contract_name INTEGER,date_programming Date,  department_iddepartment INTEGER,identifacation INTEGER,identification_employee INTEGER,idinspetor INTEGER, idsupervisor INTEGER, last_name TEXT, name TEXT, name_client TEXT, phone TEXT, phone2 TEXT, priority INTEGER, service_type_idservice_type INTEGER,state INTEGER,  type_gas INTEGER, type_network_idtype_network INTEGER, type_service_idtype_service INTEGER, zona TEXT)';
    return this.db.executeSql(sql, []);
  }

  createTableImage() {
    let sql = 'CREATE TABLE IF NOT EXISTS image(id INTEGER PRIMARY KEY AUTOINCREMENT,idphotos INTEGER, name_photo TEXT, actual INTEGER, quantity INTEGER, min INTEGER,  odi_idodi INTEGER, idservice_certifications INTEGER)';
    return this.db.executeSql(sql, []);
  }
  createTabletype_service() { // tabla tipo de Servicio
    let sql = 'CREATE TABLE IF NOT EXISTS type_network(idtype_network INTEGER PRIMARY KEY AUTOINCREMENT, name_network TEXT, type_service_idtype_service INTEGER)';
    return this.db.executeSql(sql, []);
    // console.log(this.db)
  }

  Select_type_service() {
    let sql = 'SELECT * FROM type_network';
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

  Select_type_service_one(type) {
    let sql = 'SELECT * FROM type_network WHERE type_service_idtype_service=?';
    return this.db.executeSql(sql, [type])
      .then((response) => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return tasks;
      })
      .catch(error => Promise.reject(error));
  }

  Insert_type_service(idtype_network, name_network, type_service_idtype_service) {
    let sql = 'INSERT INTO type_network(name_network,type_service_idtype_service)VALUES(?,?)';
    return this.db.executeSql(sql, [name_network, type_service_idtype_service]);
  }

  Insert_Odi(idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,
    contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,
    idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,
    state, type_gas, type_network_idtype_network, type_service_idtype_service, zona) {
    let sql = 'INSERT INTO asignadas(idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,state, type_gas, type_network_idtype_network, type_service_idtype_service, zona)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,
      contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,
      idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,
      state, type_gas, type_network_idtype_network, type_service_idtype_service, zona]);
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
