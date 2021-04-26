import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Map from "./map";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PersonIcon from "@material-ui/icons/Person";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";

import BookingCom from "./BookingCom";

export default function TourDetails(props) {
  const { location } = props;
  const data = location.state.data;
  console.log(data);
  const date = new Date(data.startDate);
  const description = data.location;

  return (
    <div>
      <Grid container spacing={1}>
        {/* QUICK FACTS */}
        <Grid
          style={{ background: "#f7f7f7" }}
          item
          container
          justify="center"
          alignItems="center"
          xs={6}
        >
          <Grid item xs={5} style={{ margin: "10rem 0rem" }}>
            <Typography
              style={{ fontFamily: "Lato", fontWeight: "700" }}
              variant="h5"
            >
              QUICK FACTS
            </Typography>
            {/* DATE */}
            <Grid
              style={{ margin: "1.5rem 0rem 0rem 0rem" }}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ paddingLeft: "0px" }}>
                <CalendarTodayIcon style={{color:"#3992e2"}}/>
              </Grid>
              <Grid item style={{ padding: "10px 20px" }}>
                <Typography style={{ fontFamily: "Lato", fontWeight: "700" }}>
                  NEXT DATE
                </Typography>
              </Grid>
              <Grid item style={{ padding: "0px" }}>
                {date.getMonth()} {date.getFullYear()}
              </Grid>
            </Grid>
            {/* DIFFICULTY  */}
            <Grid
              style={{ margin: "1.1rem 0rem" }}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ paddingLeft: "0px" }}>
                <TrendingUpIcon style={{color:"#3992e2"}}/>
              </Grid>
              <Grid item style={{ padding: "10px 20px" }}>
                <Typography style={{ fontFamily: "Lato", fontWeight: "700" }}>
                  DIFICULTY
                </Typography>{" "}
              </Grid>
              <Grid item style={{ padding: "0px" }}>
                <Typography>{data.difficulty}</Typography>
              </Grid>
            </Grid>
            {/* Perticipants */}
            <Grid
              style={{ margin: "1.1rem 0rem" }}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ paddingLeft: "0px" }}>
                <PersonIcon style={{color:"#3992e2"}} />
              </Grid>
              <Grid item style={{ padding: "10px 20px" }}>
                <Typography style={{ fontFamily: "Lato", fontWeight: "700" }}>
                  PARTICIPANTS
                </Typography>
              </Grid>
              <Grid item style={{ padding: "0px" }}>
                <Typography>{data.maxPeople} person</Typography>
              </Grid>
            </Grid>
            {/* RATING  */}
            <Grid
              style={{ margin: "1.1rem 0rem" }}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ paddingLeft: "0px" }}>
                <StarBorderIcon style={{color:"#3992e2"}}/>
              </Grid>
              <Grid item style={{ padding: "10px 20px" }}>
                <Typography style={{ fontFamily: "Lato", fontWeight: "700" }}>
                  RATING
                </Typography>
              </Grid>
              <Grid item style={{ padding: "0px" }}>
                <Typography>{data.rating}/5</Typography>
              </Grid>
            </Grid>
            {/* DURATION */}
            <Grid
              style={{ margin: "1.1rem 0rem" }}
              container
              justify="flex-start"
              alignItems="center"
            >
              <Grid item style={{ paddingLeft: "0px" }}>
                <HourglassFullIcon style={{color:"#3992e2"}} />
              </Grid>
              <Grid item style={{ padding: "10px 20px" }}>
                <Typography style={{ fontFamily: "Lato", fontWeight: "700" }}>
                  DURATION
                </Typography>
              </Grid>
              <Grid item style={{ padding: "0px" }}>
                <Typography>{data.duration} Day's</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* DESCRIPTION */}
        <Grid item xs={6} style={{ background: "#ffffff" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={8} style={{ margin: "10rem 0rem" }}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: "2.5rem",
                  fontFamily: "Lato",
                  fontWeight: "700",
                }}
              >
                ABOUT THE {description.toUpperCase()} TOUR
              </Typography>
              <Typography style={{ fontFamily: "Lato", fontWeight: "300" }}>
                {data.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Map
        location={data.location}
        lat={data.lat_coordinate}
        lon={data.len_coordinate}
      />

      <Grid container justify="center" alignItems="center">
        <Grid item xs={7}>
          <BookingCom details={data.duration} />
        </Grid>
      </Grid>
    </div>
  );
}

// <Link to="/tour/:name"><Button>Detail's</Button></Link>
