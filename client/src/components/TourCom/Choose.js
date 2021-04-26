import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Icon1 from "./asset/choose_icon1.png";
import Icon2 from "./asset/choose_icon2.png";
import Icon3 from "./asset/choose_icon3.png";
import Icon4 from "./asset/choose_icon4.png";

export default function Choose() {
  return (
    <div style={{ background: "#fff" }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={10} md={10} lg={10}>
          <Typography style={{fontFamily: "Raleway", paddingBottom: "30px"}} variant="h3" color="initial" align="center">
            Why choose us
          </Typography>
          <Typography style={{fontFamily: "Raleway",fontSize:"1.2rem" ,lineHeight: '30px'}} variant="h5" color="initial" align="center">
            Ultimate tour guide is a local travel guide site. We are taking
            bookings, offering the best price and without any interference of
            middleman. The facilities we provide within this price range are
            impossible for any tour operator in Bangladesh. We do not charge
            extra for food, it is included in the All tour pakage you book.
            Moreover, the food is prepared maintaining all hygiene.
          </Typography>
        </Grid>
      </Grid>

      <Grid 
        style={{marginTop: "5rem"}}
        container 
        spacing={3}
        direction="row" 
        justify="center" 
        alignItems="center">
        <Grid
          
          container
          direction="column"
         
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
          lg={2}
        >
          <Grid item xs={12}>
            <img style={{padding: "12px"}} src={Icon1} alt=""/>
          </Grid>
          <Grid item xs={12}>
            <Typography 
            style={{marginTop:"1.3rem",fontFamily: "Raleway", fontSize: "1.3rem",fontWeight: "bold"}} 
            variant="h5" 
            color="initial">
               Eventful Itinerariesa
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography 
            style={{marginTop:"1rem",fontFamily: "Raleway", fontSize: "1rem",fontWeight: "normal"}} 
            align="center" 
            variant="h5" 
            color="initial">
            For a journey filled with surprises
            </Typography>
          </Grid>
        </Grid>

        <Grid
        style={{margin : "0px"}}
          container
          direction="column"
          justify="center"
          
          alignItems="center"
          spacing={3}
          xs={12}
          sm={6}
          md={3}
          lg={2}
          
        >
          <Grid  item xs={12}>
            <img src={Icon2} alt="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
            style={{
                padding: "0px",
                marginTop: "10px",
                fontFamily: "Raleway", 
                fontSize: "1.3rem",
                fontWeight: "bold"}}  
            variant="h5" 
            color="initial">
              Variety in Packages
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{fontFamily: "Raleway", fontSize: "1rem",fontWeight: "normal"}} 
              align="center" 
              variant="h5" 
              color="initial">
            Choose packages that suit you best
            </Typography>
          </Grid>
        </Grid>

        <Grid
          style={{margin : "0px"}}
          container
          direction="column"
          spacing={3}
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
          lg={2}
        >
          <Grid item xs={12}>
            <img src={Icon3} alt="" />
          </Grid>
          <Grid item xs={12}>
            <Typography 
            style={{
              paddingTop: "10px",
              marginTop: "10px",
              fontFamily: "Raleway", 
              fontSize: "1.3rem",
              fontWeight: "bold"}}  
            variant="h5" 
            color="initial">
            Customer Support
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography 
                style={{fontFamily: "Raleway", fontSize: "1rem",fontWeight: "normal"}}
                align="center" 
                variant="h5" 
                color="initial">
            For complete assistance and your satisfaction
            </Typography>
          </Grid>
        </Grid>

        <Grid
          style={{margin : "0px"}}
          container
          direction="column"
          spacing={3}
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          md={3}
          lg={2}
        >
          <Grid item xs={12}>
            <img src={Icon4} alt="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
                style={{
                  padding: "0px",
                  marginTop: "10px",
                  fontFamily: "Raleway", 
                  fontSize: "1.3rem",
                  fontWeight: "bold"}}  
                variant="h5" 
                color="initial">
                    Reasonable Rates
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
            style={{fontFamily: "Raleway", fontSize: "1rem",fontWeight: "normal"}} 
            align="center" 
            variant="h5" 
            color="initial">
            Our rates assure an affordable journey
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
