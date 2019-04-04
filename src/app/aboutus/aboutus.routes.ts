import { CorporateSummaryComponent } from "./corporate-summary/corporate-summary.component";
import { HistoryComponent } from "./history/history.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { NetworkComponent } from "./network/network.component";

export const ABOUTUS_ROUTES = [
  {
    path: "",
    component: AboutusComponent
  },
  {
    path: "corporate-summary",
    component: CorporateSummaryComponent,
    data: { title: "CORPORATE SUMMARY" }
  },
  {
    path: "history",
    component: HistoryComponent,
    data: { title: "HISTORY" }
  },
  {
    path: "network",
    component: NetworkComponent,
    data: { title: "NETWORK" }
  }
];
