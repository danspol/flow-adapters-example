import {Action} from "@ngrx/store";

export function createActionTypes(actionTypes) {

  return function <T>(type): T | any {

    return Object.entries(actionTypes).reduce((result, [key, action]) => {
      result[key] = actionTypeNameFactory(type, action);
      return result;
    }, {});
  };
}

function actionTypeNameFactory(type, action) {
  return type ? `${type} ${action}` : `${action}`;
}

function makeClassAction(type) {

  return class implements Action {
    type = type;

    constructor(public payload) {
    }
  }
}

function getActionTypeFactory(actionType) {

  const actionTypeClass = makeClassAction(actionType);

  return function (payload) {
    return new actionTypeClass(payload);
  }
}

export function createAction(type, action) {
  const actionType = actionTypeNameFactory(type, action);
  return getActionTypeFactory(actionType);
}
