import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, IonItemSliding, Platform } from '@ionic/angular';
import { Location, Restaurant } from 'src/Table/table';
import { LocationService } from '../Service/location.service';
import LocationPicker from "location-picker";
import { SharedService } from '../Service/shared.service';
import { Router } from '@angular/router';
import { RestaurantService } from '../Service/restaurant.service';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map',{read:ElementRef,static:false}) mapElement: ElementRef;
  latitude: number;
  longitude: number;
  usePicker: boolean;
  marker: any;
  lp: LocationPicker;
  status: any;
  RestaurantLocation: any;
  location:boolean = false;
  map = null;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  markers: Marker[] = [
    // {
    //   position: {
    //     lat: 9.015762798263422,
    //     lng: 38.76962972750053,
    //   },
    //   title: 'Africana Restaurant and Bar'
    // },
    // {
    //   position: {
    //     lat: 8.98339179692712,
    //     lng: 38.773790006329726,
    //   },
    //   title: 'Ethiopian Skylight Hotel'
    // },
    // {
    //   position: {
    //     lat: 9.0255328494506,
    //     lng: 38.78723060144852,
    //   },
    //   title: 'Andualem Cafe and Restaurant'
    // },
    // {
    //   position: {
    //     lat: 9.02164486810647,
    //     lng: 38.773880346562024,
    //   },
    //   title: ' Dashen Traditional Restaurant'
    // },
  ];
  listOfRestaurant: Restaurant[];
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private platform: Platform,
    private restaurantService:RestaurantService) {
  }
//  getRestaurant(){
//    this.restaurantService.getAllRestaurant().subscribe(res=>{
//      this.listOfRestaurant = res;
//      res.forEach(ele=>{
//        let postions ={
//          lat:ele.Location.lat,
//          lng:ele.Location.lon
//        }
//        let data ={
//         position:postions,
//         title:ele.Name
//        }
//        this.markers.push(data);
//       })
//    })
//  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 8.98339179692712, lng: 38.773790006329726};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
    
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  ngOnInit() {
   //this.getRestaurant();
    if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
    this.status = this.sharedService.status.value;
    if(this.status == "driver-home" || this.status == "restaurant-home" || this.status =="order" || this.status =="restaurant-history"){
      this.location=false;
      this.loadMap();
    }
    else{
      this.setLocation()
      this.location=true;
    }
  // console.log(this.status);
    this.RestaurantLocation = this.sharedService.RestaurantLocation.value;
    let pos ={
      lat:this.RestaurantLocation.latitude,
      lng:this.RestaurantLocation.longtude
    }
    let data ={
      position:pos,
      title:null
    }
    this.markers.push(data);
    console.log(this.RestaurantLocation);
  }
  setLocationPick() {
    this.latitude = this.lp.getMarkerPosition().lat;
    this.longitude = this.lp.getMarkerPosition().lng;
    let data = {
      lat: this.latitude,
      lon: this.longitude
    }
    console.log(data)
    this.sharedService.location.next(data)
    this.router.navigate(["/menu/" + this.status]);
  }
  showMap(){
    const location = new google.maps.LatLng(-17.824858,31.853828);
    const options={
      center:location,
      zoom:15,
      disableDefaultUI:true
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, options);
  }
  setLocation() {
    this.lp = new LocationPicker('map', {
      setCurrentPosition: true, // You can omit this, defaults to true
    }, {
      zoom: 15 // You can set any google map options here, zoom defaults to 15
    });
   }
  getMarkerPosition() {
    const latLng = this.map.getCenter()
    return { lat: latLng.lat(), lng: latLng.lng() }
  }

  backToHome() {
    this.router.navigate(["/menu/" + this.status]);
  }
}
