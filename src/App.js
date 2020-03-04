import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Userlistpage from './components/reusableComponents/userlistpage'
import PrivateRoute from './components/utils/Private';
import PublicRoute from './components/utils/Public';
class App extends React.Component 
{

  
  render()
  {
    return (
      <div className="App">
       <Switch>
         {/* <Route exact path='/' component={LoginForm} />         
         <Route exact path='/Userlistpage' component={Userlistpage} /> */}
         <PublicRoute restricted={true} component={LoginForm} path="/" exact />  
        <PrivateRoute component={Userlistpage} path='/Userlistpage' exact />
       </Switch>

      </div>
    );
  }
}
export default App;
