import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ToDo from "./pages/ToDo"


function App() {

  return (
    <div>
      <ToDo />
    </div>
  );
}

export default App;
