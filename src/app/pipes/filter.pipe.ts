import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], Texto: string, columna: string): any[] {
    console.log(Texto)
    Texto = Texto.toLowerCase();

    if (Texto === '') {
      return arreglo
    }
    console.log(columna)
    return arreglo.filter(item => {

      return item[columna].toLowerCase().includes(Texto)

    })
    console.log(arreglo)
    // return arreglo;
  }

}
