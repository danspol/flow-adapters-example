import {
  ISearchPaginationActions,
  ISearchPaginationTypes
} from "../../../../../../projects/flow-adapters/src/search-pagination/actions";
import {
  combineAdapterActions,
  combineAdapterActionTypes
} from "../../../../../../projects/flow-adapters/src/helpers/adapter";
import {adapters} from "./adapters";
import {IEntityActions, IEntityTypes} from "../../../../../../projects/flow-adapters/src/entity/actions";

type BookActionTypes = ISearchPaginationTypes & IEntityTypes;
type BookActions = ISearchPaginationActions & IEntityActions;

export const action: BookActions = combineAdapterActions(adapters);
export const actionTypes: BookActionTypes = combineAdapterActionTypes(adapters);
