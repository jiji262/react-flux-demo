import AppDispatcher from "../AppDispatcher";
import { ADD_ITEM, REMOVE_ITEM, EVENT_CHANGE } from "../AppConstants";
import { EventEmitter } from "events";

var _store = {
  list: []
};

var addItem = function(item) {
  _store.list.push(item);
};

var removeItem = function(index) {
  _store.list.splice(index, 1);
};

var todoStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(EVENT_CHANGE, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(EVENT_CHANGE, cb);
  },
  getList: function() {
    return _store.list;
  }
});

AppDispatcher.register(function(action) {
  switch (action.type) {
    case ADD_ITEM:
      addItem(action.payload);
      todoStore.emit(EVENT_CHANGE);
      break;
    case REMOVE_ITEM:
      removeItem(action.payload);
      todoStore.emit(EVENT_CHANGE);
      break;
    default:
      return true;
  }
});

export default todoStore;
