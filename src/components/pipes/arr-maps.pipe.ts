import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayMaps',
})
export class ArrayMapsPipe implements PipeTransform {
    transform<T, K extends keyof T>(
        value: Array<T>,
        ...propertyNames: K[]
    ): T[K][][] {
        return value?.map((it) => propertyNames.map((prop) => it[prop]));
    }
}
