import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    const today = new Date();
    const weekday = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const months = ['Ener', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let prefix = '';

    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (date.getTime() === today.getTime()) {
      prefix = 'Hoy';
    } else {
      today.setDate(today.getDate() + 1);

      if (date.getTime() === today.getTime()) {
        prefix = 'Mañana';
      } else {
        prefix = '';
      }
    }

    return prefix + ' ' + weekday[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()];
  }

}
