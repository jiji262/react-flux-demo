import AppDispatcher from '../AppDispatcher';
import { actionConstants, eventConstants } from '../AppConstants';
import {EventEmitter} from 'events';

var _store = {
  list: []
};

var addItem = function(item){
  _store.list.push(item);
};

var removeItem = function(index){
  _store.list.splice(index, 1);
}

var todoStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(eventConstants.EVENT_CHANGE, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(eventConstants.EVENT_CHANGE, cb);
  },
  getList: function(){
    return _store.list;
  },
});

AppDispatcher.register(function(action){
  switch(action.actionType){
    case actionConstants.ADD_ITEM:
      addItem(action.data);
      todoStore.emit(eventConstants.EVENT_CHANGE);
      break;
    case actionConstants.REMOVE_ITEM:
      removeItem(action.data);
      todoStore.emit(eventConstants.EVENT_CHANGE);
      break;
    default:
      return true;
  }
});

export default todoStore;
