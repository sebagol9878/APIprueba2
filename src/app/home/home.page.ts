import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera'; // Ajuste en la importación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kg: number = 20;
  panmolde: number = 50;
  hayuya: number = 50;
  baguette: number = 50;
  pan: boolean = false;

  username: string = '';

  constructor(public photoService: PhotoService) {
    defineCustomElements(window);
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ionViewDidEnter() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }

  async requestPermission() {
    const status = await Geolocation.checkPermissions();
    if (status.location === 'granted') {
      // Ya tienes permiso
    } else if (status.location === 'denied') {
      // Necesitas solicitar permiso al usuario
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        // Permiso otorgado
      }
    }
  }

  async openCamera() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
    });
    console.log('Photo data:', image);
  }
}
