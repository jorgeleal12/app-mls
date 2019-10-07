import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { constant } from '../utilitis/constant';
let LoginServiceService = class LoginServiceService {
    constructor(http) {
        this.http = http;
        this.constant = new constant();
        this.api_url = this.constant.routeGlobal;
    }
    save_image(params) {
        return this.http.post(`${this.api_url}movil/image`, params);
    }
    login(params) {
        return this.http.post(`${this.api_url}movil/login`, params);
    }
    totalasignadas(params) {
        return this.http.post(`${this.api_url}movil/totalasignadas`, params);
    }
    seach_asignadas(params) {
        return this.http.post(`${this.api_url}movil/seach_asignadas`, params);
    }
    photos_service(params) {
        return this.http.post(`${this.api_url}movil/photos_service`, params);
    }
    registerToken(params) {
        return this.http.post(`${this.api_url}movil/registerToken`, params);
    }
    search_materials() {
        return this.http.get(`${this.api_url}movil/search_materials`);
    }
    search_builder() {
        return this.http.get(`${this.api_url}movil/search_builder`);
    }
    search_certificate(params) {
        return this.http.post(`${this.api_url}movil/search_certificate`, params);
    }
    number(params) {
        return this.http.post(`${this.api_url}movil/number`, params);
    }
    save_certificate(params) {
        return this.http.post(`${this.api_url}movil/save_certificate`, params);
    }
    ViewImage(params) {
        return this.http.post(`${this.api_url}movil/ViewImage`, params);
    }
    SaveService(params) {
        return this.http.post(`${this.api_url}movil/SaveService`, params);
    }
    type_red(params) {
        return this.http.post(`${this.api_url}list/list_type_network`, params);
    }
    SaveCliente(params) {
        return this.http.post(`${this.api_url}client/create`, params);
    }
    ListClient(page) {
        return this.http.get(`${this.api_url}movil/ListClient?page=${page}`);
    }
    AutoListClient(client) {
        return this.http.get(`${this.api_url}movil/AutoListClient?client=${client}`);
    }
    ListAcount(params) {
        return this.http.post(`${this.api_url}movil/ListAcount`, params);
    }
    CreateAcount(params) {
        return this.http.post(`${this.api_url}client/create_account`, params);
    }
    ListCity(page) {
        return this.http.get(`${this.api_url}movil/ListCity?page=${page}`);
    }
    AutoCity(city) {
        return this.http.get(`${this.api_url}movil/AutoCity?city=${city}`);
    }
    ListMaterial(page) {
        return this.http.get(`${this.api_url}movil/ListMaterial?page=${page}`);
    }
    AutoListMaterial(material) {
        return this.http.get(`${this.api_url}movil/AutoListMaterial?material=${material}`);
    }
    CreateMaterial(params) {
        return this.http.post(`${this.api_url}materials/savemovil`, params);
    }
    MaterialCertificate(material) {
        return this.http.get(`${this.api_url}movil/MaterialCertificate?material=${material}`);
    }
    ListBuilder(page) {
        return this.http.get(`${this.api_url}movil/ListBuilder?page=${page}`);
    }
    AutoListBuilder(material) {
        return this.http.get(`${this.api_url}movil/AutoListBuilder?builder=${material}`);
    }
    listsic(builder) {
        return this.http.get(`${this.api_url}movil/listsic?builder=${builder}`);
    }
    listcom(builder) {
        return this.http.get(`${this.api_url}movil/listcom?builder=${builder}`);
    }
    SevaBuilder(params) {
        return this.http.post(`${this.api_url}builder/create`, params);
    }
    search_address(address) {
        return this.http.get(`${this.api_url}movil/search_address?address=${address}`);
    }
};
LoginServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], LoginServiceService);
export { LoginServiceService };
//# sourceMappingURL=login-service.service.js.map