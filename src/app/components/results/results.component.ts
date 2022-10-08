import { Component, OnInit } from '@angular/core';
import { catchError, of, Subscription } from 'rxjs';
import { IRegisterForm } from 'src/app/interfaces/index.itf';
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
