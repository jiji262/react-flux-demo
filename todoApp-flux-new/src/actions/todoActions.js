import { ADD_ITEM, REMOVE_ITEM } from "../AppConstants";

var todoActions = {
  addItem: item => ({
    type: ADD_ITEM,
    payload: item
  }),
  removeItem: index => ({
    type: REMOVE_ITEM,
    payload: index
  })
};

export default todoActions;
