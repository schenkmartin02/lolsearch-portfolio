import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameType'
})
export class GameTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 440) {
      return "Ranked Flex";
    }
    if (value == 420) {
      return "Ranked Solo/Duo";
    }
    if (value == 430) {
      return "Blind Pick";
    }
    if (value == 400) {
      return "Draft Pick";
    }
    if (value == 450) {
      return "ARAM";
    }
    if (value == 700) {
      return "Clash";
    }
    if (value == 830) {
      return "Co-op vs AI";
    }
    if (value == 840) {
      return "Co-op vs AI Intro";
    }
    if (value == 850) {
      return "Co-op vs AI Beginner";
    }
    if (value == 860) {
      return "Co-op vs AI Intermediate";
    }
    return "Other";
  }

}
