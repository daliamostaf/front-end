import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(value:string):string {
    var regex = /(.{4})(?!$)/g;
    var formattedString = value.replace(regex, '$1-');

    return formattedString;
  }

}