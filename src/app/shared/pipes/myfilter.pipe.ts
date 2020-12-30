import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(items: any, searchStr: string): any {
    if(searchStr === ''){
      return items;
    }else{
      let filteredItems = items.filter(
        (item) => item.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      );
      return filteredItems;
    }
  }

}
