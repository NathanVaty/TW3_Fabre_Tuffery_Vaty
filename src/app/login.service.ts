import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isAdmin = false;
  adminSub = new Subject();

  connexion(donnees) {
    if (donnees.ndc == "admin" && donnees.mdp == "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
      alert("mot de passe invalide");
    }
    this.emitAdmin();
  }

  deconnexion() {
    this.isAdmin = false;
    this.emitAdmin();
  }
  emitAdmin() {
    this.adminSub.next(this.isAdmin);
  }
}
