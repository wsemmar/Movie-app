import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopRated from "./TopRated";
import NavBar from "./NavBar";
import Popular from "./Popular";
import React, { useState } from "react";
import "./style.css";
import Moviethriler from "./Moviethriler";
function App() {
  const [pages, setpages] = useState(1);
  const [rated, setrated] = useState();
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/TopRated">
            <TopRated
              pages={pages}
              rated={rated}
              setpages={setpages}
              setrated={setrated}
            />
          </Route>
          <Route path="/Popular">
            <Popular
              pages={pages}
              rated={rated}
              setpages={setpages}
              setrated={setrated}
            />
          </Route>
          <Route>{rated && <Moviethriler />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
