import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInSide from "./components/login.js";
import SearchPage from "./components/search.js";
import DashboardPage from "./components/dashboard.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
