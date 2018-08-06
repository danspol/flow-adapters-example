import {adapters} from "./adapters";
import {AppSearchPaginationState} from "./state";
import {combineFlatReducers} from "../../../../../../projects/flow-adapters/src/helpers/reducer";

const initialState: AppSearchPaginationState = new AppSearchPaginationState();

const searchReducer = adapters.search.getReducer();
const searchActionTypes = adapters.search.getActionTypes();

const entityActionTypes = adapters.entities.getActionTypes();
const entityReducer = adapters.entities.getReducer([{
  action: entityActionTypes.FIND_SUCCESS,
  targetAction: searchActionTypes.SEARCH_SUCCESS
}]);

const reducers = combineFlatReducers([
  searchReducer,
  entityReducer
]);

export function searchPaginationReducer(state = initialState, action): AppSearchPaginationState {

  return reducers(state, action);
}
