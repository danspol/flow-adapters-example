import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EffectsModule} from "@ngrx/effects";
import {metaReducers, reducers} from "./app.reducers";
import {StoreModule} from "@ngrx/store";
import {BooksModelService} from "./examples/books/containers/books-model.service";
import {BooksComponent} from "./examples/books/containers/books.component";
import {BooksEffects} from "./examples/books/containers/books.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FlowAdaptersModule} from '../../projects/flow-adapters/src/lib/flow-adapters.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FlowAdaptersModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      BooksEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 5, // Retains last 25 states
      logOnly: true
    }),
  ],
  providers: [BooksModelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
