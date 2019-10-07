import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(arreglo, Texto, columna) {
        Texto = Texto.toLowerCase();
        if (Texto === '') {
            return arreglo;
        }
        return arreglo.filter(item => {
            console.log(item);
            return item[columna].toLowerCase().includes(Texto);
        });
        console.log(arreglo);
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map