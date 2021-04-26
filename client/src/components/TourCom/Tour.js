import React, { useState, useEffect } from "react";
import axios from "axios";
import TourCard from "./TourCard";
import { Grid, Typography } from "@material-ui/core";
import Choose from "./Choose";
import Service from "./Service";
import Process from "./Process";

export default function Tour() {
  // SET TOUR DATA FROM SERVER
  const [tour, setTour] = useState([]);

  // GET DATA FROM SERVER
  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://localhost:3001/api/tours");
      // console.log(result.data.tour);
      setTour(result.data.tour);
    }

    // CALL GETTOUR FUNCTION
    getData();
  }, []);

  // AFTER CLICK DETAILS
  // const details = () => {};

  return (
    <div>
      {console.log(tour)}

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} style={{ margin: "3rem 0px" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={9}
          >
            {tour.map((tourData, index) => (
              <Grid
                item
                container
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                wrap="nowrap"
                key={index}
              >
                <TourCard
                  style={{ width: "100%" }}
                  cost={tourData.cost}
                  image={tourData.photo}
                  location={tourData.location}
                  description={tourData.description}
                  duration={tourData.duration}
                  startDate={tourData.startDate}
                  lat_coordinate={tourData.lat_coordinate}
                  len_coordinate={tourData.len_coordinate}
                  rating={tourData.ratingAvarage}
                  maxPeople={tourData.maxPeople}
                  summary={tourData.summary}
                  difficulty={tourData.difficulty}
                  personRating={tourData.personRating}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>

      <Choose />
      <Service />
    </div>
  );
}
