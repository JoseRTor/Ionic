import { Injectable } from '@angular/core';
import {place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: place[] =[
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://www.toureiffel.paris/themes/custom/tour_eiffel/build/images/hero-home-new-sm.jpg',
      comments: ['Maravillosa torre, preciosa', 'una belleza', 'no es tan grande']
    },
    {
      id: '2',
      title: 'Torres Gemelas',
      imageURL: 'https://images.ecestaticos.com/MLay1BmQGQzglYNe7NcifsFMn10=/0x121:2271x1398/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F615%2Fa81%2Fb85%2F615a81b854ab8442417f574e1eda6d78.jpg',
      comments: ['Me tocó un señor raro', 'vi un avion','una aberrasion', 'no es tan pequeña']
    },
    {
      id: '3',
      title: 'Torres Gemelas',
      imageURL: 'https://images.ecestaticos.com/MLay1BmQGQzglYNe7NcifsFMn10=/0x121:2271x1398/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F615%2Fa81%2Fb85%2F615a81b854ab8442417f574e1eda6d78.jpg',
      comments: []
    }
   
  ]


  constructor() { }

  /**
   * getPlaces: recupera un listado de ciudades
   * @returns Array de objetos de ciudades
   */

  getPlaces(){

    return[...this.places]

  }
/**
 * getPlace: Recupera un objeto de tipo ciudad
 * @param placeID (Identificador del objeto de la ciudad a recuperar)
 *
 * @returns (Devuelve un objeto ciudad, recuperado del listado completo de ciudades) 
 */
  getPlace(placeID: string | undefined){
    return{
      ...this.places.find(place => {
        return place.id===placeID
      })
    }
  }
/**
 * addPlace: añade una ciudad nueva al listado de ciudades existente
 * @param title (título del objeto nueva ciudad a crear)
 * @param imageURL (Imagen del objeto de nueva ciudad a crear)
 * 
 */
  addPlace(title: string | undefined, imageURL: string | undefined){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: (this.places.length+1).toString()
    });
  }
/**
 * deletePlace: Borra una ciudad localizada a través de su identificador
 * @param placeID (Identificador de la ciudad a borrar)
 * 
 */
  deletePlace(placeID: string){
    this.places=this.places.filter(place =>{
      return place.id != placeID
    })
  }


}
