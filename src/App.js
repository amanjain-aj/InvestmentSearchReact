import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInSide from "./components/login.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInSide} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
