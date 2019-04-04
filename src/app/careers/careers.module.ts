import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers/careers.component';
import { ShopFloorExcellenceComponent } from './shop-floor-excellence/shop-floor-excellence.component';
import { PeopleDevComponent } from './people-dev/people-dev.component';
import { GraduateProgramComponent } from './graduate-program/graduate-program.component';
import { PgProgramComponent } from './pg-program/pg-program.component';

@NgModule({
  declarations: [CareersComponent, ShopFloorExcellenceComponent, PeopleDevComponent, GraduateProgramComponent, PgProgramComponent],
  imports: [
    CommonModule
  ]
})
export class CareersModule { }
