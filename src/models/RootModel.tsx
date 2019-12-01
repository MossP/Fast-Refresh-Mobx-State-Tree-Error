import React, { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';
import { TaskStoreModel } from './TaskStore';

const RootModel = types.model("Root", {
  taskStore: TaskStoreModel
});

export const rootStore = RootModel.create({
  taskStore: {},
});

onSnapshot(rootStore, snapshot => {
  console.log("snapshot: ", snapshot);
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null){
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}