import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pieDePag = {
    logo: "./assets/logo-gato.png",
    descripcion1 : "La mejor tienda de michis solo aqui",
    descripcion2 : "El unico lugar realmente preocupado por tu michi"
  }

  redes ={
    face: "https://www.facebook.com/de.gatitos/",
    insta: "https://www.instagram.com/explore/tags/gatitos/?hl=es",
    twitter: "https://twitter.com/gatitos_qctd?lang=es",
    youtube: "https://www.youtube.com/user/dlnclrksn",

    icoface: "https://www.facebook.com/images/fb_icon_325x325.png",
    icoinsta: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png",
    icotwitter: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2013/08/17981-logo-twitter.png?itok=dElA6iAV",
    icoyoutube: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/1200px-Youtube_Music_icon.svg.png",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
