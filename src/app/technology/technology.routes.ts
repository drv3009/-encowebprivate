import { TechnologyComponent } from "./technology/technology.component";
import { RnDComponent } from "./rn-d/rn-d.component";
import { UhtStampingComponent } from "./uht-stamping/uht-stamping.component";
import { MsrWeldingComponent } from "./msr-welding/msr-welding.component";
import { ForgingComponent } from "./forging/forging.component";
import { PrbFormingComponent } from "./prb-forming/prb-forming.component";
import { AedCoatingComponent } from "./aed-coating/aed-coating.component";

export const TECHNOLOGY_ROUTES = [
  {
    path: "",
    component: TechnologyComponent
  },
  {
    path: "research-and-development",
    component: RnDComponent,
    data: { title: "Research & Development" }
  },

  {
    path: "ultra-high-tensile-stamping",
    component: UhtStampingComponent,
    data: { title: "Ultra-High Tensile Stamping" }
  },
  {
    path: "msr-welding",
    component: MsrWeldingComponent,
    data: { title: "MIG & Spot Robotic Welding" }
  },
  {
    path: "forging",
    component: ForgingComponent,
    data: { title: "Forging" }
  },
  {
    path: "pipe-rod-bending-forming",
    component: PrbFormingComponent,
    data: { title: "Pipe & rod bending+forming" }
  },
  {
    path: "assembly-ed-coating",
    component: AedCoatingComponent,
    data: { title: "Assembly & ED coating" }
  }
];
