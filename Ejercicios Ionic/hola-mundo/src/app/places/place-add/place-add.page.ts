import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
  }
  saveNewPlace(title: IonInput, image: IonInput){
    //es con ioninput aunque con any va pero no es la manera correcta de hacerlo
    // undefined para todos
    this.placeService.addPlace(title.value?.toString(), image.value?.toString())
    this.router.navigate(['/places']);
  }

}
