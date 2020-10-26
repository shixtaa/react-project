import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Switch,Route, Redirect } from 'react-router-dom';
import Phone from './Feature/phone/phone';
import Code from './Feature/code/code';
import Test from './Feature/Test/test';

function App () {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/phone'>
            <Phone></Phone>
          </Route>
          <Route path='/code'>
            <Code></Code>
          </Route>
          <Route path='/test'>
            <Test></Test>
          </Route>
          <Route path='/'>
            <Redirect to='/phone'></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
