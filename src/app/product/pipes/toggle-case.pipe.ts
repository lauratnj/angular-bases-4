import { Pipe, PipeTransform } from "@angular/core";

// laura | toggleCase = 'LAURA'
// LAURA | toggleCase = 'laura'


@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }
}
