import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(input?: string): string | undefined {
    if (input) {
      const words = [];
      for(let word of input.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
      }
      return words.join(' ');
    }
    return input;   
  }
}
