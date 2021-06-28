import './App.css';
import {Provider} from 'react-redux'
import CakeComponent from './Components/CakeComponent'
import store from './redux/store';
import HookCakeContainer from './Components/HookCakeContainer';
import IceCreamComponent from './Components/IceCreamComponent';
import NewCakeComponent from './Components/NewCakeComponent';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      {/* <ItemContainer cake/>
      <ItemContainer />
      <CakeComponent />
      <HookCakeContainer />
      <NewCakeComponent />
      <IceCreamComponent /> */}
    </div>
    </Provider>
  );
}

export default App;
