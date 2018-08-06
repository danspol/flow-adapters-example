import {NgModule} from '@angular/core';
import {FlowAdaptersComponent} from './flow-adapters.component';
import {SearchPaginationModelService} from "../search-pagination/model.service";
import {EntityModelService} from "../entity/model.service";

@NgModule({
  imports: [],
  declarations: [FlowAdaptersComponent],
  exports: [FlowAdaptersComponent],
  providers: [
    SearchPaginationModelService,
    EntityModelService
  ]
})
export class FlowAdaptersModule {
}
