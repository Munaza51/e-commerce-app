import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import NotFound from './pages/NotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
