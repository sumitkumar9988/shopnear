import React from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router >
      <Header/>
        <main className="py-3">
          <Container>
              <Route path='/' component={HomeScreen} exact/>
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
