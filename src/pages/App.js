import { Provider } from 'react-redux';
import { Routes } from '../config';
import './App.css';
import store from './../config/redux/store';

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
