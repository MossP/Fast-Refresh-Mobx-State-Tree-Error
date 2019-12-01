import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TodoItem } from './TodoItem';
import { TaskStore } from '../models/TaskStore';
import { observer } from 'mobx-react';

interface Props {
  taskStore: TaskStore,
  options?: any,
}

export const TodoList: React.FC<Props> = observer((props:Props) => {
  const { items } = props.taskStore;
  console.log('Rendered:TodoList');
  return(
    <View style={{backgroundColor:'#e4e4e4', padding:10, flex:1}}>
      <Text>DataStore Test</Text>
      <View><Text style={{color:'#555555'}}>{items.length}</Text></View>
      <ScrollView automaticallyAdjustContentInsets={true}>
        {items.map((item, idx) => <TodoItem key={idx} todo={item} /> )}
      </ScrollView>
    </View>
  );
});
