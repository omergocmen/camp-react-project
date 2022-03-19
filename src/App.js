import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  signIn,signOut } from './store/actions/authActions';



function App() {

  const dispatch=useDispatch();
  if(localStorage.getItem("token")){
    dispatch(signIn(true));
  }else{
    dispatch(signOut(false));
  }


  return (
    <div className="App">
    <Navi/>
      <Container className='main'>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
