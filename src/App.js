import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/layout/NavBar';
import SignInList from './component/layout/SignInList';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <SignInList />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
