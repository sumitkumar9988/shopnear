import React from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens//ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
        <main className="py-3">
          <Container>
              <Route path='/' component={HomeScreen} exact/> 
              <Route path='/order/:id' component={OrderScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/shipping' component={ShippingScreen} />
              <Route path='/payment' component={PaymentScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/placeorder' component={PlaceOrderScreen} />
              <Route path='/register' component={RegisterScreen} />
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
