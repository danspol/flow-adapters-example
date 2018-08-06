import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {actionTypes, action} from './store/actions';
import {map} from "rxjs/operators";

const books = [{
  id: 12,
  firstName: 'Vanea',
  lastName: 'asdasd'
}, {
  id: 13,
  firstName: 'Vanea 3',
  lastName: 'asdasd 4'
}];

@Injectable()
export class BooksEffects {

  @Effect() $search = this.actions$
    .pipe(
      ofType(actionTypes.SEARCH),
      map((payload) => {

        return action.searchSuccess({
          entities: books,
          totals: books.length
        });
      })
    );

  constructor(private actions$: Actions) {
  }
}
