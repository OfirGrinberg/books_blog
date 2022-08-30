import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords',
})
export class LimitWordsPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    value = value.split(' ', limit).join(' ')
    value += '...';
    return value;
  }
}
