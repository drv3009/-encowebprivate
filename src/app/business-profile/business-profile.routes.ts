import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ChassisComponent } from './chassis/chassis.component';
import { SuspenssionsComponent } from './suspenssions/suspenssions.component';
import { BodyInWhiteSystemsComponent } from './body-in-white-systems/body-in-white-systems.component';
import { ToolingFixturesComponent } from './tooling-fixtures/tooling-fixtures.component';
import { RoboticsAutomationComponent } from './robotics-automation/robotics-automation.component';
import { FeaCaeComponent } from './fea-cae/fea-cae.component';

export const BUSINESSPROFILE_ROUTES = [
    { 
      path: '', component: BusinessProfileComponent 
    },
    {
        path: 'chassis', component: ChassisComponent, data: {title: 'Chassis'}
    },
    {
        path: 'susspension', component: SuspenssionsComponent, data: {title: 'Susspenssions'}
    },
    {
        path: 'body-in-white-system', component: BodyInWhiteSystemsComponent, data: {title: 'Body-In-White System'}
    },
    {
        path: 'tooling-fixtures', component: ToolingFixturesComponent, data: {title: 'Tooling & Fixtures'}
    },
    {
        path: 'robotics-automation', component: RoboticsAutomationComponent, data: {title: 'Robotics & Automation'}
    },
    {
        path: 'fea-cae', component: FeaCaeComponent, data: {title: 'FEA & CAE'}
    },
];