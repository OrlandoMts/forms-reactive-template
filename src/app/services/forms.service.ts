import { Injectable } from '@angular/core';
import { IRegisterForm } from '../interfaces/index.itf';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private _accountsUser: IRegisterForm[] = []

  constructor() { }

  public setDataUser(user: IRegisterForm): void {
    this._accountsUser.push(user)
  }

  public setDataAnimal(): void {}

  public get accountsUser() : IRegisterForm[] {
    return [...this._accountsUser];
  }

}
