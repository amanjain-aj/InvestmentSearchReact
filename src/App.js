import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInSide from "./components/login.js";
import SearchPage from "./components/search.js";
import DashboardPage from "./components/dashboard.js";
import { createTheme, ThemeProvider,makeStyles} from '@mui/material/styles';

const defaultTheme = createTheme({ 
    shadows: Array(1).fill('none')
});

function App() {

 

  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
