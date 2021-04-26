import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Paper,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Q_A() {
  const [expanded, setExpanded] = useState();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ marginBottom: "100px", marginTop: "50px" }}>
      <Grid container>
        <Grid item xs={2}></Grid>
        {/* DECLARE DETAILS INFORMATION */}

        <Grid item xs={8}>
          <Accordion
            expanded={expanded === "panel1"}
            style={{ margin: "10px 0px" }}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                1. How to book the tour ?
              </Typography>
            </AccordionSummary>
            <Paper elevation={6}>
              <AccordionDetails style={{ background: "#f7f7f7" }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      style={{ fontFamily: "Ubuntu" }}
                      display="block"
                    >
                      Telephone call +919382551174
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{ fontFamily: "Ubuntu" }}
                      display="block"
                    >
                      Email : Ultimatetourguide@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontFamily: "Ubuntu" }}>
                      Bank transfers.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontFamily: "Ubuntu" }}>
                      Directly from our website Bangladeshi Customber.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontFamily: "Ubuntu" }}>
                      Foreigner need to pay Via Razorpay Payment.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{ fontFamily: "Ubuntu" }}>
                      Select any payment method and pay 50% advance and
                      remaining 50% during tour By Cash only. Plz note there is
                      no ATM.
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Paper>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                2. need to carry sleeping blankets and sleeping bag ?
              </Typography>
            </AccordionSummary>
            <Paper elevation={4}>
              <AccordionDetails style={{ background: "#f7f7f7" }}>
                <Typography style={{ fontFamily: "Ubuntu" }}>
                  no need to carry sleeping blankets and sleeping bag.
                </Typography>
              </AccordionDetails>
            </Paper>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                3. What is package tour?
              </Typography>
            </AccordionSummary>
            <Paper elevation={6}>
              <AccordionDetails style={{ background: "#f7f7f7" }}>
                <Typography style={{ fontFamily: "Ubuntu" }}>
                  Package Tour means, you are traveling with zero costs during
                  the Ultimate tour guide, Package included everything, like car
                  transportation, fooding, Lodging everything are included.
                </Typography>
              </AccordionDetails>
            </Paper>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                4.Which one is the best package in your site for travel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                According our tour manager and travel expert, 2 Nights and 3
                Days package is most popular package. As Sundarban Delta with so
                many islands that one can not the all without investing the 4-5
                days in travelling. Therefore, in our daily busy schedule we can
                invest atleast 2-3 days for getting idea of this tour package.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                5.Is it comfortable to stay overnight in boat?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                Yes, as the boat has inbuilt 10-12 good bed to rest any time
                during the travel, but it is like dormitory system. Therefore,
                it is not suggested to stay overnight in boat for women
                travelers.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                6.Is there any hidden cost apart from Ultimate tour guide?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>No, No hidden cost</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                7.In sundorban tour, Is there any fear to be attact by tiger or
                wild animal?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                No, Absolutely no, as the boat are highly secure.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                8.Why ultimatetourguide most popular in these day's?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                Ultimate tour guide arrnage tour all over the bangladesh,
                therefore spending a weekend or couple of days Sundarban is the
                best place around.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                9.What is most attraction tourist place in Bangladesh?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                So many places to see in Bangladesh, like sea-beatch, hill, sun
                raise, sun set in sea beatch, mangrove tree forest etc.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                10.When is the best time of sundarban tour?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                Sundarbans Tour can be done at any time of the year. Most
                crowded are usually during the holidays and winter months.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                11.Is it batter to go on a ultimatetourguide package tour or go
                alone?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                It is better to go to the tour package than go to the new place
                own arrangement. It costs much less.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                12.How about hotel facilities?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                If you go on a package tour, the hotel offers a very modern and
                beautiful hotel or cottage for a night stay, and even in the
                summer you can get air-conditioned rooms.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                13.How many travlers can accomodate on a hous boat in sundorban
                tour package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                House boats can usually accommodate 30 to 40 travelers.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                14.Is in this Ultimatetourguide package a private offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                Usually you have to book separately for a private car.
                Otherwise, the traveler is taken in a shared car.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                15.How many travlers can participate within a tour package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                There is some limitation to these types of tours. Separate house
                boats are arrange if more than 30 people are in it.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                16.Is identity card mandatory for attend in tour package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                Yes, for traveling in the Sundarbans you need to have a valid ID
                or passport
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                17.May I taky my pet at package tour?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                You are not allowed to take your pet on Ultimatetourguide Tour.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
            style={{ margin: "10px 0px" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "",
                  fontSize: "1.2rem",
                }}
                variant="h5"
              >
                18.Availability of the tour package?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ background: "#f7f7f7" }}>
              <Typography>
                We do tours on an everymonth basis, though there is an extra
                cost if there are no groups on that day. E-mail or call us to
                find about the available groups.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}
