import './App.css';
import {store} from './lib/redux';
import {Provider} from 'react-redux';
import './index.css'
import {PureInboxScreen} from './components/InboxScreen' 

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     
     <PureInboxScreen/>
     </Provider>
    </div>
  );
}

export default App;
