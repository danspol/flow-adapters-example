import {
  createSearchPaginationAdapter,
  ISearchPaginationAdapter
} from "../../../../../../projects/flow-adapters/src/search-pagination/adapter";
import {combineAdapters} from "../../../../../../projects/flow-adapters/src/helpers/adapter";
import {createEntityAdapter, IEntityAdapter} from "../../../../../../projects/flow-adapters/src/entity/adapter";

const TYPE = 'App';

interface IAppAdapter {
  search: ISearchPaginationAdapter,
  entities: IEntityAdapter
}

const adapterMap = {
  search: createSearchPaginationAdapter,
  entities: createEntityAdapter
};

const options = {
  mapId: 'id'
};

export const adapters: IAppAdapter = combineAdapters<IAppAdapter>(adapterMap, TYPE, options);

// export const actions = {};
// export const actionTypes = {};

