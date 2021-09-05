import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home"
import ToDo from "./pages/ToDo"
import Review from "./pages/Review"
import Chatbot from "./components/Chatbot/Chatbot"
import fire from "./fire"

const handleLogout = () => {
  fire.auth().signOut();
}

function App() {

  return (
    <Router>
      <Chatbot />
      <Navbar handleLogout={handleLogout} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/todo' exact component={ToDo} />
        <Route path='/review' exact component={Review} />
        <Redirect to="/" />
      </Switch>
      <Chatbot />
    </Router>
    // <div>
    //   <Navbar />
    //   <ToDo />
    // </div>
  );
}

export default App;
