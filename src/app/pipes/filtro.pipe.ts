import { Pipe, PipeTransform } from '@angular/core';
import { Episodios } from '../interfaces/episodios';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(filtro: Episodios[], page: number = 0, search: string = ''): Episodios[] {
    
    if (search.length === 0) return filtro.slice(page, page + 10);

    const filter = filtro.filter((morty) =>
      morty.name.includes(search)
    );
    return filter.slice(page, page + 5);
  }
}
