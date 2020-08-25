import { Component, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {CatalogueserviceService} from './catalogueservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  catserv: CatalogueserviceService, private router: Router) { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  isTracking = false;

  currentLat: any;
  currentLong: any;

  marker: google.maps.Marker;
  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }
  /*Onsavelivraison(Data: any) {
    this.catserv.saveRessources(this.catserv.host+"/Ajouterlocalisation/",Data)
        .subscribe(res => {
          this.currentlivraison= res;
          this.router.navigateByUrl("/app");
          alert("Ajout effectué avec succée")
        }, err => {
          console.log(err);
        });
  }*/
  Onsavelivraison(value: any) {
    
  }
}
