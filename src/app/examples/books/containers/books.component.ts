import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BooksModelService} from './books-model.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {
  title = 'Search pagination';

  constructor(public booksModelService: BooksModelService) {
  }
}
