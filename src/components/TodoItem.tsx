import React from 'react';
import { Text, View } from 'react-native';
import { Todo } from '../models/Todo';
import { observer } from 'mobx-react';

interface Props {
    todo: Todo,
}

export const TodoItem: React.FunctionComponent<Props> = observer((props:Props) => {
  console.log('Rendered:Item');
  return(
  <View>
    <Text style={{color:'#555'}}>{props.todo.name} {props.todo.status}.</Text>
  </View>
)
});