import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  pages: Object = {
    home: {
      title: "Home",
      subtitle: "Welcome Home!",
      content: "Some home content.",
      image: "assets/Page-1-Image-1.png"
    },
    "about-us": {
      title: "About",
      subtitle: "About Us",
      content: "Some content about us.",
      image: "assets/Page-1-Image-1.png"
    },
    contact: {
      title: "Contact",
      subtitle: "Contact Us",
      content: "How to contact us.",
      image: "assets/Page-1-Image-1.png"
    }
  };
  constructor() {}
}
