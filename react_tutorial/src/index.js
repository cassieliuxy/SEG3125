import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CssBaseline, makeStyles, Container } from "@material-ui/core";
import "./index.css";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import CustomizedMenus from "./menu";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Index() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}></div>
      <h2>
        <center>Welcome to Carpool Project</center>
      </h2>
    </Container>
  );
}

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <CustomizedMenus />
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}

// ========================================

ReactDOM.render(<Main />, document.getElementById("root"));
