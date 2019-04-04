import { CareersComponent } from "./careers/careers.component";
import { ShopFloorExcellenceComponent } from "./shop-floor-excellence/shop-floor-excellence.component";
import { GraduateProgramComponent } from "./graduate-program/graduate-program.component";
import { PgProgramComponent } from "./pg-program/pg-program.component";
import { PeopleDevComponent } from "./people-dev/people-dev.component";

export const CAREERS_ROUTES = [
  {
    path: "",
    component: CareersComponent
  },
  {
    path: "shop-floor-execellence",
    component: ShopFloorExcellenceComponent,
    data: { title: "Shop Floor Execellence" }
  },
  {
    path: "graduate-program",
    component: GraduateProgramComponent,
    data: { title: "Graduate Program" }
  },
  {
    path: "post-graduate-program",
    component: PgProgramComponent,
    data: { title: "Post Graduate Program" }
  },
  {
    path: "people-development",
    component: PeopleDevComponent,
    data: { title: "People Development" }
  }
];
