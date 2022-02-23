import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { Usuario } from "src/app/model/usuario";

@Injectable({
  providedIn:"root"
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  entrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/usuarios/logar", usuario)

  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8080/usuarios/cadastrar", usuario)

  }
}
