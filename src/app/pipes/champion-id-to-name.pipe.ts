import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'championIdToName'
})
export class ChampionIdToNamePipe implements PipeTransform {

  transform(championId: any, championData: any): string {
    for (let champion in championData.data) {
      if (championData.data[champion].key == championId) {
        return championData.data[champion].name;
      }
    }
    return '';
  }

}
