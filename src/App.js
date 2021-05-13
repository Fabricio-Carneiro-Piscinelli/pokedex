import React from 'react';
import { Provider} from 'react-redux';

//responsavel pela estancia de armazenamento do redux
import { store, persistor } from './common/store/store';

import { PersistGate } from 'redux-persist/integration/react'

import RouteCombiner from './common/route';

import './client/sass/_config.scss';

function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <RouteCombiner />
       </PersistGate>
    </Provider>
  );
}

export default App;
