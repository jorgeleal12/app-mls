import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], Texto: string, columna: string): any[] {

    Texto = Texto.toLowerCase();

    if (Texto === '') {
      return arreglo
    }
    return arreglo.filter(item => {

      console.log(item)
      return item[columna].toLowerCase().includes(Texto)

    })
    console.log(arreglo)

  }

}
