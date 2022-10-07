import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, filter, map, of, Subscription } from 'rxjs';
import { IRegisterForm } from 'src/app/interfaces/index.itf';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit, OnDestroy {

  private _accUserSub!: Subscription;
  public accsUser!: IRegisterForm[];

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
                            .subscribe( (_accUsers) => _accUsers && (this.accsUser = _accUsers) )
  }

  closeSubscriptions(): void {
    if (this._accUserSub && !this._accUserSub.closed) this._accUserSub.unsubscribe();
  }

}
