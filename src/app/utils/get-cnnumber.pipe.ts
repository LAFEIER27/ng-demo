import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCNnumber',
})
export class GetCNnumberPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    console.log(value, args);

    const valArr: Array<string> = (value as any).split('');
    const type: 'CN' | 'EG' = args[0] as 'CN' | 'EG';
    const cn: string[] = [
      '零',
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
    ];
    const eg: string[] = [
      'Zero',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
    ];
    if (type === 'CN') {
      return valArr.map((d) => cn[+d]).join('');
    } else {
      return valArr.map((d) => eg[+d]).join('');
    }
  }
}
