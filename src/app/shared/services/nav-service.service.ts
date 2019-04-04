import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NavServiceService {
  constructor() {}

  headers: Object = {
    Home: {
      title: "Home",
      pageUrl: "home.html"
    },
    AboutUs: {
      title: "About us",
      headers: {
        CorporateSummary: {
          title: "Corporate Summary",
          pageUrl: "corporateSummary.html"
        },
        History: {
          title: "History",
          pageUrl: "history.html"
        },
        Network: {
          title: "Network",
          pageUrl: ""
        },
        QualityCertifications: {
          title: "Quality & Certifications",
          pageUrl: ""
        },
        Partnerships: {
          title: "Partnerships",
          pageUrl: ""
        }
      },
      pageUrl: "about.html"
    },
    BusinessProfile: {
      title: "Business Profile",
      headers: {
        Suspensions: {
          title: "Suspensions",
          pageUrl: "suspensions.html"
        },
        Chassis: {
          title: "Chassis",
          pageUrl: "Chassis.html"
        },
        BodyInWhiteSystems: {
          title: "Body-in-White Systems",
          pageUrl: "bodyInWhiteSystems.html"
        },
        ToolingFixtures: {
          title: "Tooling & Fixtures",
          pageUrl: "toolingFixtures.html"
        },
        RoboticsAutomation: {
          title: "Robotics & Automation",
          pageUrl: "roboticsAutomation.html"
        },
        FeaCae: {
          title: "FEA & CAE",
          pageUrl: "FeaCae.html"
        }
      },
      pageUrl: "businessProfile.html"
    },
    Technology: {
      title: "Technology",
      headers: {
        ResearchDevelopment: {
          title: "Research & Development",
          pageUrl: "researchDevelopment.html"
        },
        ProgressiveStamping: {
          title: "Progressive Stamping",
          pageUrl: "progressiveStamping.html"
        },
        TransferStamping: {
          title: "Transfer Stamping",
          pageUrl: "transferStamping"
        },
        UltrahighTensileStamping: {
          title: "Ultra-High Tensile Stamping",
          pageUrl: "UltrahighTensileStamping.html"
        },
        MigSpotRoboticWelding: {
          title: "MIG & Spot Robotic Welding",
          pageUrl: "migSpotRoboticWelding.html"
        },
        Forging: {
          title: "Forging",
          pageUrl: "Forging.html"
        },
        PipeRodBendingForming: {
          title: "Pipe & Rod Bending+Forming",
          pageUrl: "PipeRodBendingForming.html"
        },
        AssemblyEDCoating: {
          title: "Assembly & ED Coating",
          pageUrl: "AssemblyEDCoating.html"
        }
      },
      pageUrl: "technology.html"
    },
    Career: {
      title: "Career",
      headers: {
        ShopFloorExcellence: {
          title: "Shop Floor Excellence",
          pageUrl: "ShopFloorExcellence.html"
        },
        PeopleDevelopment: {
          title: "People Development",
          pageUrl: "PeopleDevelopment.html"
        },
        GraduatePrograms: {
          title: "Graduate Programs",
          pageUrl: "GraduatePrograms.html"
        },
        PostGraduatePrograms: {
          title: "Post Graduate Programs",
          pageUrl: "PostGraduatePrograms.html"
        }
      },
      pageUrl: "career.html"
    },
    Contact: { title: "Contact", pageUrl: "contact.html" }
  };
}
