import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'championIdToRole'
})
export class ChampionIdToRolePipe implements PipeTransform {

  transform(championId: any, championData: any): string {
    for (let champion in championData.data) {
      if (championData.data[champion].key == championId) {
        return championData.data[champion].tags;
      }
    }
    return '';
  }

}
