import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  url = '//etec.boa.viagem.api.herokuapp.com/viagmns';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
