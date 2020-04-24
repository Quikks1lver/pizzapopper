import React from 'react';
import './App.css';
import EverythingContainer from './components/EverythingContainer';
import Header from './Header'
import { Provider } from 'react-redux';
import store from './redux/store';
import { render } from '@testing-library/react';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="grid-container">
        <div className="grid-item"> <EverythingContainer /> </div>
          <div className="grid-item"> hello </div>
          <div className="grid-item"> hello2 </div>
          <div className="grid-item"> hello3 </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;