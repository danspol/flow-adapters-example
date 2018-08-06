import {adapters} from "./adapters";
import {getExampleState} from "../../../../app.reducers";

export const searchSelectors = adapters.search.getSelectors(getExampleState);
export const entitySelectors = adapters.entities.getSelectors(getExampleState);
