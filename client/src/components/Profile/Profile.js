import React, { useState, Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton, Button } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

import SettingsIcon from "@material-ui/icons/Settings";
import BookingIcon from "@material-ui/icons/Redeem";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import "./profile.css";

const Profile = () => {
  const { loading, user } = useAuth0();
  console.log(user);

  const [data, setData] = useState();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const name = user.name ? (<Typography className="data">{user.nickname}</Typography> ): 
  <Typography className="data">{user.nickname}</Typography>
  

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* INTERNAR GRID */}
        <Grid
          container
          style={{
            boxShadow: "4px 6px 131px -12px rgba(0,0,0,0.5)",
            margin: "7rem 0rem",
            borderWidth: "2px",
            borderColor: "red",
            height: "800px",
          }}
          item
          xs={9}
        >
          {/* LEFT SIDE */}
          <Grid
            style={{
              background: "linear-gradient(84deg,#528de6 10%, #31b0a8 70%)",
            }}
            item
            xs={4}
          >
            <Grid
              style={{ marginTop: "10rem" }}
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                item
                xs={12}
                style={{
                  marginTop: "1rem",
                  paddingLeft: "10px",
                }}
              >
                <Button style={{color: "#fff"}} size="large" startIcon={<SettingsIcon />}>
                  <Typography style={{fontFamily:"Inter"}}>INFORMATION</Typography>
                </Button>
              </Grid>
              <Grid
                style={{
                  marginTop: "1rem",
                  paddingLeft: "10px",
                }}
                item
              >
                <Button style={{color: "#fff"}} size="large" startIcon={<BookingIcon />}>
                  <Typography>MY BOOKINGS</Typography>
                </Button>
              </Grid>
              <Grid
                style={{
                  marginTop: "1rem",
                  paddingLeft: "10px",
                }}
                item
              >
                <Button style={{color: "#fff"}} size="large" startIcon={<MonetizationOnIcon />}>
                  <Typography>BILLING</Typography>
                </Button>
              </Grid>
              <Grid
                style={{
                  marginTop: "1rem",
                  paddingLeft: "10px",
                }}
                item
              >
                <Button style={{color: "#fff"}} size="large" startIcon={<StarBorderIcon />}>
                  <Typography>MY REVIEWS</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid style={{ background: "#fff" }} item xs={8}>
            <Grid
              style={{
                paddingLeft: "10rem",
                paddingTop: "5rem",
              }}
              conainer
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              

              <Grid item>
                <Typography style={{fontFamily: "Raleway", fontWeight: "bold"}} variant="h4">YOUR ACCOUNT INFORMATION</Typography>
              </Grid>

              <Grid 
                style={{
                  marginTop: "60px"
                }}
                item>
                <Avatar src={user.picture} style={{width: "100px", height:"100px"}}/>
              </Grid>

              <Grid item>
                <Typography style={{ fontFamily: "Raleway", paddingTop: "20px" }} variant="h5">
                  Name
                </Typography>
              </Grid>

              <Grid item>
                {name}
              </Grid>

              <Grid item>
                <Typography style={{fontFamily: "Raleway"}} className="header" variant="h5">Email address</Typography>
              </Grid>

              <Grid item>
                <Typography className="data">{user.email}</Typography>
              </Grid>

              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
