import React, { Component } from "react";
import { CssBaseline, makeStyles, Container, Link } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import logo_full from "./pic/logo_full.jpg";
import what from "./pic/what.jpg";
import staff from "./pic/staff.jpg";
import staff1 from "./pic/staff1.jpg";
import staff2 from "./pic/staff2.jpg";
import ac1 from "./pic/ac1.jpg";
import ac2 from "./pic/ac2.jpg";
import ac3 from "./pic/ac3.jpg";
import ac4 from "./pic/ac4.jpg";
import ac5 from "./pic/ac5.jpg";
import ac6 from "./pic/ac6.jpg";
import ac7 from "./pic/ac7.jpg";
import ac8 from "./pic/ac8.jpg";
import question from "./pic/question.jpg";
import ac9 from "./pic/ac9.jpg";
import contact from "./pic/contact.jpg";
import email from "./pic/email.jpg";
import address from "./pic/address.jpg";
import phone from "./pic/phone.jpg";
import info from "./pic/info.jpg";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Menu from "./menu";

import SignUp from "./signup";
import SignIn from "./signin";
// import {useImage} from 'react-image';
// import Gallery from 'react-image-gallery';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";

import { BrowserRouter as Router, Route } from "react-router-dom";

const rows = [
  createData(
    <a style={{ color: "#f2f2ee" }}>aaaaaaaaaaaaaaaaaaaaa</a>,
    <img src={staff1} alt="staff1" height="300px" width="300px" />,
    <a style={{ color: "#252c41" }}>
      <a style={{ fontWeight: "bold", fontSize: 30 }}>Julia Elizabeth</a>
      <br></br>
      <a style={{ fontWeight: "bold", fontSize: 24 }}>Co-Founder</a>
      <br></br>
      <a style={{ fontSize: 24 }}>
        Toys and games PR, lifelong fan of board, <br></br>card and dice games.
        And cocktails.
      </a>
    </a>,
    <a style={{ color: "#f2f2ee" }}>aaaaaaaaaaaaa</a>
  ),
  createData(
    <a style={{ color: "#f2f2ee" }}>aaaaaaaaaaaaaaaaaaaaa</a>,
    <img src={staff2} alt="staff2" height="300px" width="300px" />,
    <a style={{ color: "#252c41" }}>
      <a style={{ fontWeight: "bold", fontSize: 30 }}>Christopher Lee</a>
      <br></br>
      <a style={{ fontWeight: "bold", fontSize: 24 }}>Co-Founder</a>
      <br></br>
      <a style={{ fontSize: 24 }}>
        Toyologist, dad, gamer and journalist. <br></br>Unashamed fan of board
        games old and new.
      </a>
    </a>,
    <a style={{ color: "#f2f2ee" }}>aaaaaaaaaaaaa</a>
  ),
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(0),
    },
  },
  home_button: {
    "& > *": {
      margin: theme.spacing(5),
    },
    width: "100%",
  },
  home_text: {
    color: "black",
  },

  au_header: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#f1404b",
  },

  au_text: {
    paddingTop: 20,
    paddingLeft: 250,
    paddingRight: 250,
    color: "#252c41",
  },

  table: {
    background: "#f2f2ee",
    // width: "100%",
    // align: "center",
    // marginLeft:450,
    padding: 0,
  },
  nav: {
    flexGrow: 2,
    backgroundColor: "#f1404b",
    fontSize: 20,
  },
  pic: {
    width: "25%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function createData(blank1, pic_staff, intro, blank2) {
  return { blank1, pic_staff, intro, blank2 };
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static" color="#f2f2ee">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          centered
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About Us" {...a11yProps(1)} />
          <Tab label="Gallery" {...a11yProps(2)} />
          <Tab label="Get a Free Chance" {...a11yProps(3)} />
          <Tab label="Help" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div className={classes.alert}>
        <Alert severity="warning">
          Please read the privacy about COVID-19 before you reserve an activity.
        </Alert>
      </div>
      <TabPanel value={value} index={0}>
        <div className="App" style={{ background: "#f2f2ee" }}>
          <div className="App-header">
            <img src={logo_full} className="logo" alt="logo" />

            <div className={classes.home_button}>
              {/* <Router>
                <div>
                  <Route path="/" exact component={Menu} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/signin" component={SignIn} />
                </div>
              </Router> */}

              <Button size="large" variant="contained" color="white">
                <Link href="/register_bstrap_1" color="black">
                  Create a New Account
                </Link>
              </Button>

              <Button size="large" variant="contained" color="white">
                <Link href="/signin" color="black">
                  Login to My Account
                </Link>
              </Button>
              <br />
              <Button size="small" variant="contained" color="white">
                <Link href="/signup" color="black">
                  French
                </Link>
              </Button>

              <div className={classes.home_text}>
                <a style={{ color: "#f1404b" }}>Join us for a games night!</a>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="App" style={{ background: "#f2f2ee" }}>
          <img src={logo_full} className={classes.pic} alt="logo" />
          <div
            className="App-header"
            style={{ color: "black", minHeight: "10vh" }}
          >
            <a className={classes.au_header}>
              <img src={what} alt="what" height="50px" width="50px" /> What is
              OTW Board Game Club?
            </a>
            <a className={classes.au_text}>
              The OTW Board Game Club is a group of people whose goal is to
              build a community of friends and to learn and play board games of
              all types. From strategy games like Catan and Dominion to Party
              games like FunEmployed, and the classics like Sorry and The Game
              of Life, we welcome gamers of all levels! Come join us! We have
              many activities in Ottawa. Check the schedule for the details.
            </a>
            <br></br>
            <a className={classes.au_header}>
              <img src={staff} alt="staff" height="50px" width="50px" /> Our
              Staff Team
            </a>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.blank1}</TableCell>
                      <TableCell align="left" paddingLeft="100">
                        {row.pic_staff}
                      </TableCell>
                      <TableCell align="left">{row.intro}</TableCell>
                      <TableCell align="left">{row.blank2}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
            <a className={classes.au_header}>
              <img src={contact} alt="contact" height="50px" width="50px" />{" "}
              Contact Information
            </a>
            <a className={classes.au_text}>
              <img src={phone} alt="phone" height="30px" width="30px" /> Phone
              Number: (613)-885-7456
            </a>
            <a className={classes.au_text}>
              <img src={email} alt="email" height="30px" width="30px" /> Email
              Address: otw_bgclub@gmail.com
            </a>
            <a className={classes.au_text}>
              <img src={address} alt="address" height="30px" width="30px" />{" "}
              Location: 422 Bank Street, Ottawa, ON K2P 1Y8
            </a>
          </div>
          <br></br>
          {/* <div className="App-header"></div> */}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="App" style={{ background: "#f2f2ee" }}>
          <img src={logo_full} className={classes.pic} alt="logo" />
          <div
            className="App-header"
            style={{ color: "black", minHeight: "10vh" }}
          >
            <img src={ac1} alt="ac1" height="400" /> <br />
            <img src={ac2} alt="ac2" height="400" /><br />
            <img src={ac3} alt="ac3" height="400" /> <br />
            <img src={ac4} alt="ac4" height="400" /><br />
            <img src={ac5} alt="ac5" height="400" /> <br />
            <img src={ac6} alt="ac6" height="400" /><br />
            <img src={ac7} alt="ac7" height="400" /> <br />
            <img src={ac8} alt="ac8" height="400" /> <br />
            <img src={ac9} alt="ac9" height="400" /> <br />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="App" style={{ background: "#f2f2ee" }}>
          <img src={logo_full} className={classes.pic} alt="logo" />
          <div
            className="App-header"
            style={{ color: "black", minHeight: "10vh" }}
          >
            <form style={{color: "#252c41"}}>
              <h3>
                <img src={info} height="50" width="50" /> Contact
                Information{" "}
              </h3>
              <div class="info" style={{fontSize: 22, marginBottom: 15}}>
                First name: <input type="text" name="firstname" />
              </div>
              <div class="info" style={{fontSize: 22, marginBottom: 15}}>
                Last name: <input type="text" name="lastname" />
              </div>
              <div class="info" style={{fontSize: 22, marginBottom: 15}}>
                <label>
                  *E-mail Address: 
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    name="email"
                    size="25"
                    required
                  />
                </label>
              </div>
              <div class="info" style={{fontSize: 22}}>
                <label>
                  *Phone Number: 
                  <input
                    type="number"
                    placeholder="xxx xxx xxxx"
                    name="phone"
                    maxlength="11"
                    required
                  />
                </label>
              </div>
              
              <br />
              
              <input type="submit" value="Submit" /><a style={{color:"#f2f2ee"}}>ssssssss</a>
              <input type="reset" value="Clear" />
            </form><br /><br /><br />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="App" style={{ background: "#f2f2ee" }}>
          <img src={logo_full} className={classes.pic} alt="logo" />
          <div
            className="App-header"
            style={{ color: "black", minHeight: "10vh" }}
          >
             <form style={{color: "#252c41"}}>
              <h3>
                <img src={question} height="50" width="50" /> If you have any questions, please submit them here. <br />We will reply to you as soon as possible!{" "}
              </h3>
              <div class="info" style={{fontSize: 22, marginBottom: 15,color: "#252c41"}}>
                Name: <input type="text" name="firstname" />
              </div>
              <div class="info" style={{fontSize: 22, marginBottom: 15,color: "#252c41"}}>
                <label>
                  *E-mail Address: 
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    name="email"
                    size="25"
                    required
                  />
                </label>
              </div>
              <div class="info" style={{fontSize: 22, marginBottom: 15,color: "#252c41"}}>Your Questions:<br />
                <div class="box">
                    <textarea name="comments" rows="8" cols="50" placeholder="Enter questions here."></textarea>
               </div>
              </div>
              
              <br />
              
              <input type="submit" value="Submit" /><a style={{color:"#f2f2ee"}}>ssssssss</a>
              <input type="reset" value="Clear" />
            </form><br /><br /><br />
            </div></div>
          </TabPanel>
    </div>
  );
}
