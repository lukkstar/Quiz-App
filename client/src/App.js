import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import AddQuestion from "./components/addquestion/AddQuestion";
import Game from "./components/game/Game";
import History from "./components/history/History";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Game} />
      </Switch>
      <Switch>
        <Route path="/add-question" component={AddQuestion} />
      </Switch>
      <Switch>
        <Route path="/results" component={History} />
      </Switch>
    </div>
  );
}

export default App;
