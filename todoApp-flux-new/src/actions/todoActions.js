import AppDispatcher from '../AppDispatcher';
import { actionConstants } from '../AppConstants';

var todoActions = {
  addItem: function(item){
    AppDispatcher.dispatch({
      actionType: actionConstants.ADD_ITEM,
      data: item
    });
  },
  removeItem: function(index){
    AppDispatcher.dispatch({
      actionType: actionConstants.REMOVE_ITEM,
      data: index
    })
  }
}

export default todoActions
