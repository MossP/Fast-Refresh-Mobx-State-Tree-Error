import { types, Instance } from 'mobx-state-tree';

export const TodoModel = types.model('Todo', {
  name: types.string,
  details: "",
  is_done: false,
}).actions( self => ({
  markDone(){
    self.is_done = true;
  }
})).views(self => ({
  status(){
    return self.is_done ? "Done" : "Not Done"
  }
}));


export type Todo = Instance<typeof TodoModel>;