import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ChassisComponent } from './chassis/chassis.component';
import { SuspenssionsComponent } from './suspenssions/suspenssions.component';
import { BodyInWhiteSystemsComponent } from './body-in-white-systems/body-in-white-systems.component';
import { ToolingFixturesComponent } from './tooling-fixtures/tooling-fixtures.component';
import { RoboticsAutomationComponent } from './robotics-automation/robotics-automation.component';
import { FeaCaeComponent } from './fea-cae/fea-cae.component';

@NgModule({
  declarations: [BusinessProfileComponent, ChassisComponent, SuspenssionsComponent, BodyInWhiteSystemsComponent, ToolingFixturesComponent, RoboticsAutomationComponent, FeaCaeComponent],
  imports: [
    CommonModule    
  ]
})
export class BusinessProfileModule { }
