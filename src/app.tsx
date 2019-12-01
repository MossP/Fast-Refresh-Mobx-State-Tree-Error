import React from 'react';
import { Provider, rootStore } from './models/RootModel';
import { screen as TestScreen} from './screens/test';

import { observer } from 'mobx-react';


const mainApp : React.FC = () => {
  console.log('Rendered:Root');
  return(
    <Provider value={rootStore}>
      <TestScreen />
    </Provider>
  );
};
export default observer(mainApp);