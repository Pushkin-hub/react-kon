import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import OrderDetails from './component/OrderDetails';
import Menu from './component/Menu';
import './styles.css';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app-container">
        <h1>Fast Food Kiosk</h1>
        <div className="order-panel">
          <OrderDetails />
        </div>
        <div className="menu-panel">
          <Menu />
        </div>
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
