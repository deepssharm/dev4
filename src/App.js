import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";



// Admin Section
import Cricket from "./Component/Admin/Cricket/index";
import CricketInner from "./Component/Admin/CricketInner/index";

class App extends Component {
  render() {
    const Layout = ({ children }) => (
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          {children}
        </div>
      </div>
    );
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Layout>
              <Route exact path="/admin" component={Cricket} />
              <Route exact path="/cricket-list" component={CricketInner} />
              </Layout>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
