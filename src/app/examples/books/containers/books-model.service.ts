import {Injectable} from "@angular/core";
import {entitySelectors, searchSelectors} from './store/selectors';
import {action} from './store/actions';
import {
  ISearchPaginationModel,
  SearchPaginationModelService
} from '../../../../../projects/flow-adapters/src/search-pagination/model.service';
import {ISearchPaginationActions} from "../../../../../projects/flow-adapters/src/search-pagination/actions";
import {EntityModelService, IEntityModel} from "../../../../../projects/flow-adapters/src/entity/model.service";
import {IEntityActions} from "../../../../../projects/flow-adapters/src/entity/actions";
import {Observable} from "rxjs";
import {map, withLatestFrom} from "rxjs/operators";

@Injectable()
export class BooksModelService {
  searchModel: ISearchPaginationModel;
  searchDispatch: ISearchPaginationActions;

  entitiesModel: IEntityModel<any>;
  entitiesDispatch: IEntityActions;

  listEntities: Observable<any>;

  constructor(private searchPaginationModel: SearchPaginationModelService,
              private entityModel: EntityModelService) {
    this.searchModel = this.searchPaginationModel.getModels(searchSelectors);
    this.searchDispatch = this.searchPaginationModel.dispatch(action);

    this.entitiesModel = this.entityModel.getModels(entitySelectors);
    this.entitiesDispatch = this.entityModel.dispatch(action);


    this.listEntities = this.searchModel.$ids
      .pipe(
        withLatestFrom(this.entitiesModel.$entities),
        map(([ids, entities]) => {
          return ids.map((id) => {
            return entities.get(id);
          })
            .toJS();
        })
      );

    const query = {test: 'ser'};
    this.searchDispatch.search({query});
  }
}
