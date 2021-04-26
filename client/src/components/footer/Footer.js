import React from "react";

import {
  Grid,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
  Divider,
  makeStyles,
} from "@material-ui/core";


import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';

// ICON FROM MATERIAL UI
import Chevron from "@material-ui/icons/ChevronRight";

// ICON FROM FONT-AWESOME 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare,
         faTwitterSquare,
         faYoutubeSquare,
         faInstagramSquare,
         faPinterestSquare  } from "@fortawesome/free-brands-svg-icons"


const navTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const useStyle = makeStyles({
  divider: {
    backgroundColor: "#ffffff",
    width: "80%",
    margin: "auto",
  },
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
    margin: "5px ",
    fontFamily: "Inter"
  },
});

export default function Footer() {
  const classes = useStyle();
  return (
    <div
      style={{
        backgroundColor: "#170830",
        marginTop: "auto",
        minHeight: "300px",
      }}
    >
      <MuiThemeProvider theme={navTheme}>
        <Grid container>
          <Grid item xs={1}></Grid>

          {/* FIRST GRID ITEMS  */}

          <Grid item md={3} style={{ marginTop: "50px" }}>
            <Typography align="center" color="primary" style={{ marginBottom: "1rem", fontFamily: "Raleway",fontWeight:"bold" }}>
              Navigation
            </Typography>

            <Divider className={classes.divider} />
            <Grid 
             container 
             direction="column" 
             justify="center" 
             alignItems="flex-start"
             style={{paddingLeft: "130px"}}>
              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Home
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Activities
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Gallery
                </Typography>
              </Grid><Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Contact
                </Typography>
              </Grid><Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  About
                </Typography>
              </Grid>
            </Grid>

            {/* <Typography color="primary">Link1</Typography>
            <Typography color="primary">Link1</Typography>
            <Typography color="primary">Link1</Typography>
            <Typography color="primary">Link1</Typography>
            <Typography color="primary">Link1</Typography>
            <Link href="about">About</Link>
            <Link
              href="http://localhost:3000/ansandquestion"
              onClick={(e) => e.preventDefault()}
            >
              FAQ'S
            </Link> */}
          </Grid>

          {/* MIDDLE GRID ITEM */}

          <Grid item md={4} style={{marginTop: "50px"}}>
          <Typography align="center" color="primary" style={{ marginBottom: "1rem", fontFamily: "Raleway",fontWeight:"bold"  }}>
              Quick Link's
            </Typography>

            <Divider className={classes.divider} />
            <Grid 
             container 
             direction="column" 
             justify="center" 
             alignItems="flex-start"
             style={{paddingLeft: "130px"}}>
              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Privacy policy
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Terms & Condition
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="primary" className={classes.wrapIcon}>
                  <Chevron />
                  Cancellation & Refund Policy
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* LAST GRID ITEM  */}
          {/* CONTACT INFORMATION */}

          <Grid item xs={12} md={3} style={{marginTop: "50px"}}>
          <Typography align="center" color="primary" style={{ marginBottom: "1rem", fontFamily: "Raleway",fontWeight:"bold"  }}>
              Get in touch
            </Typography>

            <Divider className={classes.divider} />

            <div style={{marginLeft:"130px"}}>
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{color: "#ffffff", margin: "5px 8px"}}/>
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{color: "#ffffff",margin: "5px 8px"}}/>
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" style={{color: "#ffffff",margin: "5px 8px"}}/>
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{color: "#ffffff",margin: "5px 8px"}}/>
            <FontAwesomeIcon icon={faPinterestSquare} size="2x" style={{color: "#ffffff",margin: "5px 8px"}}/>
            </div>
            <Grid 
               container 
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
               style={{marginLeft : "35px",}}>
                <Grid item>
                    <EmailIcon color="primary" style={{marginRight: "1.3rem",paddingTop:"20px"}}/>
                </Grid>
                <Grid item>
                    <Typography color="primary" style={{fontFamily:"Inter", paddingTop: "20px"}}>UltimateTourGuide@gmail.com</Typography>
                </Grid>
            </Grid>
            <Grid 
               container 
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
               style={{marginLeft : "35px"}}>
                <Grid item>
                    <PhoneIcon color="primary" style={{marginRight: "1.3rem"}}/>
                </Grid>
                <Grid item>
                    <Typography color="primary" style={{fontFamily:"Inter"}}>+88 01843-411342 / +88 01405-611681</Typography>
                </Grid>
            </Grid>
            <Grid 
               container 
               direction="row"
               justify="flex-start"
               alignItems="flex-start"
               style={{marginLeft : "35px"}}>
                <Grid item>
                    <PlaceIcon color="primary" style={{marginRight: "1.3rem"}}/>
                </Grid>
                <Grid item>
                    <Typography color="primary" style={{fontFamily:"Inter"}}>Daffodil International University , Dhaka</Typography>
                </Grid>
            </Grid>

          </Grid>
          {/* FOR GAP */}
          <Grid item xs={1}></Grid>

        </Grid>

      </MuiThemeProvider>
    </div>
  );
}
