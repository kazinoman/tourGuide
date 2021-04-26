import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Message from "./Message";
import Map from "./Map";
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Contact() {
  return (
    <div>
      <Grid
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
        container
        spacing={7}
        direction="row"
        justify="space-evenly"
      >
        {/* Location Information */}
        <Grid item xs={11} sm={11} md={5} lg={4}>
          <Typography
            style={{ fontFamily: "Satisfy", fontWeight: "bold" }}
            variant="h4"
            color="initial"
          >
            Our office Information
          </Typography>
          <Grid container style={{marginTop: "3rem"}}>
            <Grid item container >
              <Grid item>
               <PlaceIcon />
              </Grid>
              <Grid>
                <Typography 
                style={{paddingLeft:"1.1rem", fontFamily: "Raleway", fontWeight: "bold"}}>Address</Typography>
                <Typography style={{paddingLeft:"1.1rem",paddingTop :"0.5rem", fontFamily: "Raleway"}}>102/1, Shukrabad, Mirpur Road, Dhanmondi, Dhaka-1207</Typography>
              </Grid>
            </Grid>

            <Grid item container style={{paddingTop: "2rem"}}>
              <Grid item>
               <EmailIcon />
              </Grid>
              <Grid>
              <Typography 
                style={{paddingLeft:"1.2rem", fontFamily: "Raleway", fontWeight: "bold"}}>E-mail</Typography>
                <Typography 
                style={{paddingLeft:"1.2rem", fontFamily: "Raleway"}}>abdullah15-8532@diu.edu.bd</Typography>
              </Grid>
            </Grid>

            <Grid item container style={{paddingTop: "2rem"}}>
              <Grid item>
               <PhoneIcon />
              </Grid>
              <Grid>
              <Typography 
                style={{paddingLeft:"1.2rem", fontFamily: "Raleway", fontWeight: "bold"}}>Phone</Typography>
                <Typography 
                style={{paddingLeft:"1.2rem", fontFamily: "Raleway"}}>+88 01405-611681</Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        {/* USER EXPERIENCE FORM  */}

        <Grid item xs={11} sm={10} md={6} lg={6}>
          <Message />
        </Grid>
      </Grid>

      {/*  Map implementation */}

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Map component={Map} />
        </Grid>
      </Grid>
    </div>
  );
}