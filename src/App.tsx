import logo from './logo.svg';
import './App.css';
import store from './lib/redux';
import {Provider} from 'react-redux';

import InboxScreen from './components/InboxScreen' 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <InboxScreen/>
     </Provider>
    </div>
  );
}

export default App;
