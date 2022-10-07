import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRegisterForm } from '../interfaces/index.itf';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private _accountsUser: IRegisterForm[] = []
  private _accUserSub$ = new BehaviorSubject<IRegisterForm[]>(this._accountsUser);
  public accUserSub$ = this._accUserSub$.asObservable();

  constructor() { }

  public setDataUser(user: IRegisterForm): void {
    this._accountsUser.push(user); // Lo agrega a la variable local
    this._accUserSub$.next(this._accountsUser); // Listo para emitirlo
  }

  public setDataAnimal(): void {}

}
