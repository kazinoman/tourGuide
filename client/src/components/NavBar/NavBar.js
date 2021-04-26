import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import "./nav.css";
// import Logo from '../../logo/logo'

//MATERIAL UI IMPORT
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <>
      
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12}>
          <AppBar position="static" className="appBar" style={{marginBottom:"0px",background:"#1ea2dd"}}>
            <Grid container>
              <Grid item>
                <Toolbar>
                  <NavLink
                    exact
                    className="nav button"
                    to="/"
                    activeClassName="active-link"
                  >
                    <Typography style={{fontFamily: "Inter"}}>HOME</Typography>
                  </NavLink>

                  <NavLink
                    exact
                    className="nav button"
                    to="/about"
                    activeClassName="active-link"
                  >
                    <Typography style={{fontFamily: "Inter"}}>ABOUT</Typography>{" "}
                  </NavLink>

                  <NavLink
                    exact
                    className="nav button"
                    to="/ansandquestion"
                    activeClassName="active-link"
                  >
                    <Typography style={{fontFamily: "Inter"}}>FAQ'S</Typography>{" "}
                  </NavLink>

                  <NavLink
                    exact
                    className="nav button"
                    to="/contact"
                    activeClassName="active-link"
                  >
                    <Typography style={{fontFamily: "Inter"}}>CONTACT</Typography>{" "}
                  </NavLink>

                  <NavLink
                    exact
                    className="nav button"
                    to="/gallery"
                    activeClassName="active-link"
                  >
                    <Typography style={{fontFamily: "Inter"}}>GALLERY</Typography>{" "}
                  </NavLink>

                  {user ? (
                   
                      <NavLink
                        exact
                        to="/profile"
                        className="nav button"
                        activeClassName="active-link"
                      >
                        <Typography>PROFILE</Typography>
                      </NavLink>
                    
                  ) : null}

                  {!isAuthenticated ? (
                    // <Typography
                      
                    //   color="secondary"
                    //   onClick={() => loginWithRedirect({})}
                    // >
                    //   Login
                    // </Typography>
                    <Typography style={{textDecoration: "none",fontFamily:"Inter",fontSize: "19px"}}>
                       <Link className="nav button" onClick={() => loginWithRedirect({})}>
                         Login
                       </Link>
                    </Typography>
                    
                  ) : (
                    <Typography style={{textDecoration: "none",fontFamily:"Inter",fontSize: "19px"}}>
                       <Link className="nav button link" onClick={() => logout()}>
                         Logout
                       </Link>
                    </Typography>
                  )}
                  
                </Toolbar>
              </Grid>

              <Grid item>
               

              </Grid>
            </Grid>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
