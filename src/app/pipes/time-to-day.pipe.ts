import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToDay'
})
export class TimeToDayPipe implements PipeTransform {

  transform(timestamp: number): string {
    const currentDate = new Date();
    const previousDate = new Date(timestamp);
    const timeDifference = currentDate.getTime() - previousDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    return `${daysDifference} napja`;
  }

}
