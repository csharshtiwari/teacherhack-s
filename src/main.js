import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ToDo from "./pages/ToDo"
import Chatbot from "./components/Chatbot/Chatbot"


function App() {

  return (
    <div>
      <ToDo />
      <Chatbot />
    </div>
  );
}

export default App;
