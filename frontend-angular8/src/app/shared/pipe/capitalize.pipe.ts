import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(input?: string): string | undefined {
    if (input) {
      return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
    return input;
  }
}
