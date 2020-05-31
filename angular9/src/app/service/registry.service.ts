import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  private URL = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

// metodo para que me  muestre los registros
getRegistry(){
  return this.http.get<any>(this.URL + '/registry');
}

getPrivateRegistry(){
  return this.http.get(this.URL + '/private-registry');
}

}
