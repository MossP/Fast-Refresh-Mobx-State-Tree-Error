import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { observer } from 'mobx-react';
import { useMst } from '../../models/RootModel';
import { TodoList } from '../../components/TodoList';

interface Props {}

export const screen: React.FC<Props> = observer((props:Props) => {
  const { taskStore } = useMst();
  console.log('Rendered:TestScreen');
  return(
    <View style={{flex:1,padding:20}}>
      <View style={{flex:1,justifyContent:'center', alignContent:'center'}}>
        <TouchableOpacity
          style={{paddingVertical:20}}
          onPress={() => {
            taskStore.add({name:'added' + Math.random() ,description:'description'});
          }}>
            <Text>Add Item</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical:20}}
          onPress={() => {
            taskStore.clearAll();
          }}>
          <Text>Clear List</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{flex:1,justifyContent:'center', alignContent:'center'}}>
        <Text>DataStore Test</Text>
        <Text>*** Visibility at index.tsx: {taskStore.items.length}</Text></View>
      <View style={{flex:1,backgroundColor:'gray',justifyContent:'center', alignContent:'center'}}>
        <TodoList key={'rootTreeDisplay'} taskStore={taskStore} />
      </View>
    </View>
  );
});
