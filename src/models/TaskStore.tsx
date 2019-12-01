import { types, Instance } from 'mobx-state-tree';
import { TodoModel } from './Todo';

export const TaskStoreModel = types.model('TodoStore', {
  items: types.array(TodoModel),

}).actions(self => ({
  add(task:any){
    self.items.push(task);
  },
  clearAll(){
    self.items.clear();
  }
}));

export type TaskStore = Instance<typeof TaskStoreModel>;