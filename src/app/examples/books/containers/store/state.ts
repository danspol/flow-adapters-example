import {ISearchPaginationState} from "../../../../../../projects/flow-adapters/src/search-pagination/state";
import {List, Record, Map} from "immutable";
import {combineInitialState} from "../../../../../../projects/flow-adapters/src/helpers/adapter";
import {adapters} from "./adapters";
import {IEntityState} from "../../../../../../projects/flow-adapters/src/entity/state";

interface IAppSearchPaginationState extends ISearchPaginationState, IEntityState<any> {}

const initial = combineInitialState(adapters);

const AppSearchPaginationStateRecord = Record(initial);

export class AppSearchPaginationState extends AppSearchPaginationStateRecord implements IAppSearchPaginationState {
  ids: List<string>;
  limit: number;
  loading: boolean;
  page: number;
  query: Map<string, any>;
  totals: number;
  entities: Map<string, any>;
}
