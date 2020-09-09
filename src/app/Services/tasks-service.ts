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
    let sql = 'CREATE TABLE IF NOT EXISTS asignadas(iddodi INTEGER PRIMARY KEY AUTOINCREMENT,idodi INTEGER,address1 TEXT,barrio TEXT, city  INTEGER, client INTEGER, company_idcompany INTEGER, contract_idcontract INTEGER, contract_name INTEGER,date_programming Date,  department_iddepartment INTEGER,identifacation INTEGER,identification_employee INTEGER,idinspetor INTEGER, idsupervisor INTEGER, last_name TEXT, name TEXT, name_client TEXT, phone TEXT, phone2 TEXT, priority INTEGER, service_type_idservice_type INTEGER,state INTEGER,  type_gas INTEGER, type_network_idtype_network INTEGER, type_service_idtype_service INTEGER, zona TEXT,state_send INTEGER, address INTEGER, name_priority TEXT, name_atencion TEXT, name_gas TEXT, name_network TEXT, name_type TEXT,  name_state TEXT, Attention INTEGER, construtor  INTEGER , material  TEXT, clientffline INTEGER,acountoffline INTEGER, materialoffline INTEGER, builderoffline INTEGER)';
    return this.db.executeSql(sql, []);
  }

  createTableImage() {
    let sql = 'CREATE TABLE IF NOT EXISTS image(id INTEGER PRIMARY KEY AUTOINCREMENT,idphotos INTEGER, name_photo TEXT, actual INTEGER, quantity INTEGER, min INTEGER,  odi_idodi INTEGER, idservice_certifications INTEGER)';
    return this.db.executeSql(sql, []);
  }
  createTabletype_service() { // tabla tipo de Servicio
    let sql = 'CREATE TABLE IF NOT EXISTS type_network(id INTEGER PRIMARY KEY AUTOINCREMENT,idtype_network INTEGER, name_network TEXT, type_service_idtype_service INTEGER)';
    return this.db.executeSql(sql, []);
    // console.log(this.db)
  }

  createTable_inspetor() { // tabla tipo de Servicio
    let sql = 'CREATE TABLE IF NOT EXISTS inspetor(id_inspe INTEGER PRIMARY KEY AUTOINCREMENT,id INTEGER,idemployees INTEGER, name TEXT,  last_name TEXT)';
    return this.db.executeSql(sql, []);
    // console.log(this.db)
  }

  createTableClinte() { // tabla tipo de Clientes
    let sql = 'CREATE TABLE IF NOT EXISTS client(id INTEGER PRIMARY KEY AUTOINCREMENT, idclient INTEGER, name_client TEXT, id_client INTEGER, email INTEGER, phone TEXT, state INTEGER , clientffline INTEGER , send_state INTEGER)';
    return this.db.executeSql(sql, []);
  }


  createTableCuentas() { // tabla tipo de Cuentas
    let sql = 'CREATE TABLE IF NOT EXISTS client_account(id INTEGER PRIMARY KEY AUTOINCREMENT, idclient_account INTEGER, city INTEGER, indications TEXT, state  INTEGER, client_idclient INTEGER, number_acount TEXT, address TEXT, send_state INTEGER, offlline INTEGER)';
    return this.db.executeSql(sql, []);
  }

  createTableMaterials() { // tabla tipo de Materiales
    let sql = 'CREATE TABLE IF NOT EXISTS materials(id INTEGER PRIMARY KEY AUTOINCREMENT, idmaterials INTEGER,  name_materials TEXT, name_state TEXT, state INTEGER, send_state INTEGER)';
    return this.db.executeSql(sql, []);
  }

  createTableBuilder() {

    let sql = 'CREATE TABLE IF NOT EXISTS builder(id INTEGER PRIMARY KEY AUTOINCREMENT, idbuilder INTEGER,  name_builder TEXT,  identification TEXT, name_state TEXT, state INTEGER, send_state INTEGER)';
    return this.db.executeSql(sql, []);
  }

  createTableCity() {

    let sql = 'CREATE TABLE IF NOT EXISTS city(id INTEGER PRIMARY KEY AUTOINCREMENT, idmunicipality INTEGER,  name_municipality TEXT,  identification TEXT, id_dane INTEGER, id_departament INTEGER, region TEXT,name_departments TEXT,departments_dane INTEGER, id_departments INTEGER, send_state INTEGER)';
    return this.db.executeSql(sql, []);
  }


  createTableImageOffline() {
    let sql = 'CREATE TABLE IF NOT EXISTS imageoffline(id INTEGER PRIMARY KEY AUTOINCREMENT, idphotos_service INTEGER, photos_idphotos INTEGER, type_network_idtype_network INTEGER,idphotos INTEGER,  name_photo  TEXT, quantity  INTEGER, min INTEGER)';
    return this.db.executeSql(sql, []);
    // console.log(this.db)
  }


  createTableNumber() { // tabla tipo de Servicio
    let sql = 'CREATE TABLE IF NOT EXISTS number(id INTEGER PRIMARY KEY AUTOINCREMENT, number_ INTEGER, number_end INTEGER, number_ini INTEGER, idemployees INTEGER, idcounter_certificate INTEGER, idNumber_cetificate INTEGER, Number_cetificate_idNumber_cetificate INTEGER, send_state INTEGER)';
    return this.db.executeSql(sql, []);
    // console.log(this.db)
  }


  createTableCertificate() { // tabla tipo de Materiales
    let sql = 'CREATE TABLE IF NOT EXISTS certificate(id INTEGER PRIMARY KEY AUTOINCREMENT, idservice_certifications INTEGER,  idinspetor  INTEGER, id_user INTEGER,  idsupervisor INTEGER, number INTEGER, odi_idodi INTEGER, state INTEGER, send_state INTEGER, odioffline INTEGER)';
    return this.db.executeSql(sql, []);
  }


  createTableImageCertificate() {
    let sql = 'CREATE TABLE IF NOT EXISTS imagecert(id INTEGER PRIMARY KEY AUTOINCREMENT,idphotos INTEGER, name_photo TEXT, odi_idodi INTEGER, certifications INTEGER)';
    return this.db.executeSql(sql, []);
  }
  createTableImageOdi() {
    let sql = 'CREATE TABLE IF NOT EXISTS imageodi(id INTEGER PRIMARY KEY AUTOINCREMENT, idimage INTEGER, idodi INTEGER, name_image TEXT,  url TEXT, idphotos INTEGER, 	service_certifications_idservice_certifications INTEGER, sert_offline INTEGER)';
    return this.db.executeSql(sql, []);
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
    let sql = 'INSERT INTO type_network(idtype_network,name_network,type_service_idtype_service)VALUES(?,?,?)';
    return this.db.executeSql(sql, [idtype_network, name_network, type_service_idtype_service]);
  }

  Insert_Odi(idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,
    contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,
    idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,
    state, type_gas, type_network_idtype_network, type_service_idtype_service, zona, address, name_priority,
    name_atencion, name_gas, name_network, name_type, name_state, Attention, construtor) {


    let sql = 'INSERT INTO asignadas(idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,state, type_gas, type_network_idtype_network, type_service_idtype_service, zona,state_send,address, name_priority,name_atencion, name_gas, name_network, name_type, name_state,Attention, construtor)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idodi, address1, barrio, city, client, company_idcompany, contract_idcontract,
      contract_name, date_programming, department_iddepartment, identifacation, identification_employee, idinspetor,
      idsupervisor, last_name, name, name_client, phone, phone2, priority, service_type_idservice_type,
      state, type_gas, type_network_idtype_network, type_service_idtype_service, zona, 1, address, name_priority,
      name_atencion, name_gas, name_network, name_type, name_state, Attention, construtor]);
  }


  Service_Odi(
    idodi,
    address1,
    client,
    date_programming,
    identifacation,
    name_client,
    phone,
    priority,
    service_type_idservice_type,
    state,
    type_gas,
    type_network_idtype_network,
    type_service_idtype_service,
    address,
    name_priority,
    Attention,
    contract_idcontract,
    city,
    construtor,
    material,
    clientffline,
    acountoffline,
    materialoffline,
    builderoffline,) {
    let sql = 'INSERT INTO asignadas(idodi, address1, client, date_programming, identifacation,name_client, phone, priority, service_type_idservice_type,state, type_gas, type_network_idtype_network, type_service_idtype_service, state_send, address, name_priority, Attention, contract_idcontract,city,construtor,material ,clientffline, acountoffline, materialoffline, builderoffline)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idodi, address1, client, date_programming, identifacation,
      name_client, phone, priority, service_type_idservice_type,
      state, type_gas, type_network_idtype_network, type_service_idtype_service, 2, address, name_priority, Attention, contract_idcontract, city, construtor, material, clientffline, acountoffline, materialoffline, builderoffline]);
  }



  SelectOdi(state) {
    let sql = 'SELECT * FROM asignadas  WHERE state=?  ORDER BY iddodi DESC';
    return this.db.executeSql(sql, [state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }


  SelectOdiAll(state_send) {
    let sql = 'SELECT * FROM asignadas  WHERE state_send=?';
    return this.db.executeSql(sql, [state_send])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  deleteodi(state_send) {
    let sql = 'DELETE  FROM asignadas WHERE  state_send=?';
    return this.db.executeSql(sql, [state_send]);
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
        // console.log(response)
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

  insert_builder(idbuilder, name_builder, identification, state, name_state, send_state) {
    let sql = 'INSERT INTO builder(idbuilder,name_builder, identification,state,name_state,send_state) VALUES(?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idbuilder, name_builder, identification, state, name_state, send_state]);
  }

  UpdateBuilder(idbuilder, name_builder, identification, state, name_state, send_state) {
    let sql = 'UPDATE builder SET name_builder=? ,identification=?, state=? WHERE id=?';
    return this.db.executeSql(sql, [name_builder, identification, state, idbuilder]);
  }


  SelectBuilder() {
    let sql = 'SELECT * FROM builder ORDER BY id ASC';
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


  SelectBuilderAll(send_state) {
    let sql = 'SELECT * FROM builder where send_state=?';
    return this.db.executeSql(sql, [send_state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));

  }


  DeleteBuilde(send_state) {
    let sql = 'DELETE  FROM builder WHERE send_state=?';
    return this.db.executeSql(sql, [send_state]);
  }


  insert_material(idmaterials, name_materials, name_state, state, send_state) {
    let sql = 'INSERT INTO materials(idmaterials,name_materials, name_state,state,send_state) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [idmaterials, name_materials, name_state, state, send_state]);
  }

  UpdateMaterial(idmaterials, name_materials, name_state, state, send_state) {
    let sql = 'UPDATE materials SET name_materials=? ,name_state=?, state=? WHERE id=?';
    return this.db.executeSql(sql, [name_materials, name_state, state, idmaterials]);
  }

  SelectMaterial() {
    let sql = 'SELECT * FROM materials';
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


  SelectMaterialAll(send_state) {
    let sql = 'SELECT * FROM materials Where send_state=?';
    return this.db.executeSql(sql, [send_state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }


  DeleteMaterial(send_state) {
    let sql = 'DELETE  FROM materials WHERE send_state=?';
    return this.db.executeSql(sql, [send_state]);
  }

  insert_client(idclient, name_client, id_client, email, phone, state, send_state, clientffline) {
    let sql = 'INSERT INTO client(idclient,name_client, id_client,email,phone,state,send_state,clientffline) VALUES(?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idclient, name_client, id_client, email, phone, state, send_state, clientffline]);
  }

  SelectClient() {
    let sql = 'SELECT * FROM client  ORDER BY id DESC';
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


  SelectClientAll(send_state) {
    let sql = 'SELECT * FROM client Where send_state=?';
    return this.db.executeSql(sql, [send_state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  DeleteCliente(send_state) {
    let sql = 'DELETE  FROM client WHERE send_state=?';
    return this.db.executeSql(sql, [send_state]);
  }

  UpdateCliente(id, name_client, id_client, email, phone, state, idclient) {
    let sql = 'UPDATE client SET name_client=? ,id_client=?, email=?, phone=? ,state=?, idclient=? WHERE id=?';
    return this.db.executeSql(sql, [name_client, id_client, email, phone, state, idclient, id]);
  }

  UpdateCliente_id(id_client) {
    let sql = 'UPDATE client SET idclient=? WHERE id=?';
    return this.db.executeSql(sql, [id_client, id_client]);
  }


  insert_client_account(idclient_account, city, indications, state, client_idclient, number_acount, address, send_state, offline) {
    let sql = 'INSERT INTO client_account(idclient_account,city, indications,state,client_idclient,number_acount, address, send_state,offlline) VALUES(?,?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idclient_account, city, indications, state, client_idclient, number_acount, address, send_state, offline]);
  }


  SelectClient_account(idclient) {
    let sql = 'SELECT * FROM client_account where client_idclient=?';
    return this.db.executeSql(sql, [idclient])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  SelectClient_accountAll(send_state) {
    let sql = 'SELECT * FROM client_account where send_state=?';
    return this.db.executeSql(sql, [send_state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  DeleteCliente_account(send_state) {
    let sql = 'DELETE  FROM client_account WHERE send_state=?';
    return this.db.executeSql(sql, [send_state]);
  }


  InsertCity(departments_dane, id_dane, id_departament, id_departments, idmunicipality, name_departments, name_municipality, region, send_state) {
    let sql = 'INSERT INTO city(departments_dane,id_dane, id_departament, id_departments, idmunicipality, name_departments, name_municipality, region,send_state) VALUES(?,?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [departments_dane, id_dane, id_departament, id_departments, idmunicipality, name_departments, name_municipality, region, send_state]);
  }


  DeleteCity() {
    let sql = 'DELETE  FROM city WHERE send_state=?';
    return this.db.executeSql(sql, [1]);
  }

  SelectCityFinall() {
    let sql = 'SELECT * FROM city';
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

  SelectCity(text) {
    let sql = "SELECT * FROM city where name_municipality LIKE '%" + text + "%'";
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


  Select_odi_like(text) {
    let sql = "SELECT * FROM asignadas where address1 LIKE '%" + text + "%'";
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



  InsertImageoffline(idphotos, idphotos_service, min, name_photo, photos_idphotos, quantity, type_network_idtype_network) {
    let sql = 'INSERT INTO imageoffline(idphotos, idphotos_service, min, name_photo, photos_idphotos, quantity,  type_network_idtype_network) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idphotos, idphotos_service, min, name_photo, photos_idphotos, quantity, type_network_idtype_network]);
  }

  DeleteImageoffline() {
    let sql = 'DELETE  FROM imageoffline';
    return this.db.executeSql(sql, []);
  }

  SelectImageoffline(type_network) {
    // console.log(type_network)
    let sql = 'SELECT * FROM imageoffline WHERE type_network_idtype_network=?';
    return this.db.executeSql(sql, [type_network])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  insert_number(idemployees, number_, number_end, number_ini, idcounter_certificate, idNumber_cetificate, Number_cetificate_idNumber_cetificate, send_state) {
    let sql = 'INSERT INTO number(idemployees,number_, number_end, number_ini, idcounter_certificate, idNumber_cetificate, Number_cetificate_idNumber_cetificate, send_state) VALUES(?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [idemployees, number_, number_end, number_ini, idcounter_certificate, idNumber_cetificate, Number_cetificate_idNumber_cetificate, send_state]);
  }

  DeleteNumber() {
    let sql = 'DELETE  FROM number WHERE send_state=?';
    return this.db.executeSql(sql, [1]);
  }

  UpdateNumber(number1, number) {

    let sql = 'UPDATE number SET number_=?  WHERE number_=?';
    return this.db.executeSql(sql, [number1, number]);
  }


  SelectNumber() {
    let sql = 'SELECT * FROM number';
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

  InsertCertificate(NewCertificate, state, send_state, odioffline) {
    let sql = 'INSERT INTO certificate(id_user, number, odi_idodi, idinspetor, state, send_state,odioffline) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [NewCertificate.id_user, NewCertificate.number, NewCertificate.odi_idodi, NewCertificate.id_user, state, send_state, odioffline]);
  }

  updateCertificate(state, id_service) {

    let sql = 'UPDATE certificate SET state=?  WHERE id=?';
    return this.db.executeSql(sql, [state, id_service]);

  }

  // delete_table() {
  //   // let sql = 'DROP TABLE  IF EXISTS certificate';
  //   return this.db.executeSql('DROP TABLE  IF EXISTS certificate');
  // }

  SelectCertificate(odi_idodi) {
    let sql = 'SELECT * FROM certificate WHERE odi_idodi=?';
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

  SelectCertifiteAll(send_state) {
    let sql = 'SELECT * FROM certificate where send_state=?';
    return this.db.executeSql(sql, [send_state])
      .then(response => {
        let tasks = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasks.push(response.rows.item(index));
        }
        return Promise.resolve(tasks);
      })
      .catch(error => Promise.reject(error));
  }

  DeleteCertifite() {
    let sql = 'DELETE  FROM certificate';
    return this.db.executeSql(sql, []);
  }


  InsertImageOdi(filePath, name, params, sert_offline) {
    // console.log(params)
    let sql = 'INSERT INTO imageodi(idimage, idodi, name_image, url, idphotos, service_certifications_idservice_certifications,sert_offline) VALUES(?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [null, params.idodi, name, filePath, params.tipe, params.idservice, sert_offline]);
  }

  DeleteImageOdi(id) {
    let sql = 'DELETE  FROM imageodi where id=?';
    return this.db.executeSql(sql, [id]);
  }

  SelectImageOdi() {
    let sql = 'SELECT * FROM imageodi';
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

  SelectImageOdiOne(odi_idodi) {
    let sql = 'SELECT * FROM imageodi WHERE odi_idodi=?';
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


  // createTable_inspetor() { // tabla tipo de Servicio
  //   let sql = 'CREATE TABLE IF NOT EXISTS inspetor(id_inspe INTEGER PRIMARY KEY AUTOINCREMENT,idemployees INTEGER, name TEXT,  last_name TEXT)';
  //   return this.db.executeSql(sql, []);
  //   // console.log(this.db)
  // }

  Insert_inspetor(id, idemployees, last_name, name) {
    // console.log(params)
    let sql = 'INSERT INTO inspetor(id, idemployees, last_name, name) VALUES(?,?,?,?)';
    return this.db.executeSql(sql, [id, idemployees, last_name, name]);
  }

  Selectinspetor() {
    let sql = 'SELECT * FROM inspetor';
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

  delete_table() {

    this.db.executeSql('"DROP TABLE IF EXISTS inspetor');
    this.db.executeSql('"DROP TABLE IF EXISTS asignadas');
    this.db.executeSql('"DROP TABLE IF EXISTS image');
    this.db.executeSql('"DROP TABLE IF EXISTS client');
    this.db.executeSql('"DROP TABLE IF EXISTS client_account');
    this.db.executeSql('"DROP TABLE IF EXISTS materials');

    this.db.executeSql('"DROP TABLE IF EXISTS builder');
    this.db.executeSql('"DROP TABLE IF EXISTS city');

    this.db.executeSql('"DROP TABLE IF EXISTS materials');
    this.db.executeSql('"DROP TABLE IF EXISTS imageoffline');
    this.db.executeSql('"DROP TABLE IF EXISTS number');

    this.db.executeSql('"DROP TABLE IF EXISTS imagecert');
    this.db.executeSql('"DROP TABLE IF EXISTS imageodi');

  }
}
