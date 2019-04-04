import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CorporateSummaryComponent } from "./corporate-summary/corporate-summary.component";
import { HistoryComponent } from "./history/history.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { NetworkComponent } from "./network/network.component";

@NgModule({
  declarations: [
    CorporateSummaryComponent,
    HistoryComponent,
    AboutusComponent,
    NetworkComponent
  ],
  imports: [CommonModule]
})
export class AboutusModule {}
