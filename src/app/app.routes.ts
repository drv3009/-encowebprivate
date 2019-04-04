import { Routes } from "@angular/router";

import { ABOUTUS_ROUTES } from "./aboutus/aboutus.routes";
import { BUSINESSPROFILE_ROUTES } from "./business-profile/business-profile.routes";
import { TECHNOLOGY_ROUTES } from "./technology/technology.routes";
import { CAREERS_ROUTES } from "./careers/careers.routes";

import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    data: { title: "Home" },
    component: HomeComponent
  },
  {
    path: "about-us",
    children: ABOUTUS_ROUTES,
    data: { title: "About Us" }
  },
  {
    path: "business-profile",
    children: BUSINESSPROFILE_ROUTES,
    data: { title: "Business Profile" }
  },
  {
    path: "technology",
    children: TECHNOLOGY_ROUTES,
    data: { title: "Technology" }
  },
  {
    path: "careers",
    children: CAREERS_ROUTES,
    data: { title: "Careers" }
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];
