import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./signup";
import SignIn from "./signin";
import logo_full from "./pic/logo_full.jpg";
import "./App.css";
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    background: "#f2f2ee"
  },
});

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <body>
      <Router>
        <div>
          {/* <nav>
            <CustomizedMenus />
          </nav> */}

          {/* <Route path="/" exact component={App} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    </body>
  );
}


export default App;
