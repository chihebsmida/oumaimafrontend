import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CatalogueserviceService {
  public host: String = "http://localhost:8081";

  constructor(private httpClient: HttpClient) {
  }

  public Getcommandes() {
    return this.httpClient.get(this.host + "/commandes");
  }

  public deleteRessource(url) {
    return this.httpClient.delete(url);
  }
 /* public saveRessources1(url, Data): Observable<livraison> {
    // @ts-ignore
    return this.httpClient.post(url, Data);
  }

*/

 /* public updateRessources(url,data) {

    return this.httpClient.put(url,data);
  }
*/
}
