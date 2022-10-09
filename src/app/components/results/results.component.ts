import { Component, OnInit } from '@angular/core';
import { catchError, of, Subscription } from 'rxjs';
import { Animal, IRegisterForm } from 'src/app/interfaces/index.itf';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {
  private _accUserSub!: Subscription;
  public accsUser!: IRegisterForm[];

  private _countAnimalSub!: Subscription;
  public animals!: Animal[];

  constructor(private formsService: FormsService) { }

  ngOnInit(): void {
    this.raiseSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }


  raiseSubscriptions(): void {
    this._accUserSub = this.formsService.accUserSub$
                            .pipe(
                              catchError(err => of(err))
                            )
                            .subscribe( (_accUsers: IRegisterForm[]) => _accUsers && (this.accsUser = _accUsers) );

    this._countAnimalSub = this.formsService.countAnimals$
                              .pipe(
                                catchError(err => of(err))
                              )
                              .subscribe( (_countAnimals: Animal[]) => _countAnimals && (this.animals = _countAnimals) )

  }

  closeSubscriptions(): void {
    if (this._accUserSub && !this._accUserSub.closed) this._accUserSub.unsubscribe();
    if (this._countAnimalSub && !this._countAnimalSub.closed) this._countAnimalSub.unsubscribe()
  }
}
