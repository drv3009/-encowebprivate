import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TechnologyComponent } from "./technology/technology.component";
import { RnDComponent } from "./rn-d/rn-d.component";
import { UhtStampingComponent } from "./uht-stamping/uht-stamping.component";
import { MsrWeldingComponent } from "./msr-welding/msr-welding.component";
import { ForgingComponent } from "./forging/forging.component";
import { PrbFormingComponent } from "./prb-forming/prb-forming.component";
import { AedCoatingComponent } from "./aed-coating/aed-coating.component";

@NgModule({
  declarations: [
    TechnologyComponent,
    RnDComponent,
    UhtStampingComponent,
    MsrWeldingComponent,
    ForgingComponent,
    PrbFormingComponent,
    AedCoatingComponent
  ],
  imports: [CommonModule]
})
export class TechnologyModule {}
