import { NgModule } from '@angular/core';

import {GetPlaceDirective} from './get-place.directive';
import {HightlightDirective} from './hightlight.directive';

const declarations = [
  GetPlaceDirective,
  HightlightDirective,
];
@NgModule({
  imports: [
  ],
  declarations: [
    ...declarations
  ],
  exports: [
    ...declarations
  ]
})
export class PopiModule {}
