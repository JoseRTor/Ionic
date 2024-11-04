import { Component, OnInit } from '@angular/core';
import { place } from '../place.model';
import { PlacesService } from '../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})

// Definimos la variable miplace que contendrá el lugar que ha impulsado el usuario:
//se pone como tipo place y debe inicializarse:

export class PlaceDetailPage implements OnInit {

texto_nocomentarios : string = "No hay comentarios todavía..."


  public place:place= {} as place;

  constructor(private _activatedRoute:ActivatedRoute,  
    private _placeService:PlacesService,
    private router: Router,
  private alertCtrl: AlertController) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID');
      this.place=this._placeService.getPlace(recipeId!);
      console.log(this.place)
     

    })
  }
async deletePlace(){

  //this._placeService.deletePlace(this.place.id!);
  //alert("Eliminado");
  //this.router.navigate(['/places']);

  const element = await this.alertCtrl.create(
    {
      header: 'SEÑOLITO ETA UTE A PUNTO DELIMINA UNA COSA IMPOLTANTE',
      message: 'SE RESPETUOSO',
      buttons:
      [
        {
          text: 'VERDAD',
          role: 'cancel'
        },
        {
          text: 'VERDAD',
          handler: () => {
            this._placeService.deletePlace(this.place.id!);
            this.router.navigate(['/places']);
          }
        }
      ]
    }
  );
  await element.present();
}


}
