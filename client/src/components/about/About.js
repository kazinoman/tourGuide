import React from 'react';
import { Typography, Grid, Paper } from "@material-ui/core"

const About = () => {
    return (
        <>
            <Grid container style={{ background: "#FAFBFC" }}>
                <Grid item xs={1} md={2} lg={2} >
                </Grid>

                <Grid item xs={10} md={8} lg={8}>
                    <Paper style={{ height: "623px" }} elevation={1} variant="outlined" square>

                        <Typography align="center" style={{fontFamily: "Raleway"}} variant='h2'>- Our Mission - </Typography>
                        <Typography align="center" style={{fontFamily: "Raleway"}}>To provide the whole tour data and arrange tour with tour package</Typography>
                        <Typography align="center" variant="h4" style={{ padding: "16px",fontFamily : "Raleway" }}>About</Typography>
                        <Typography variant="p" style={{ marginTop: "30px", fontFamily: "Raleway" }}>
                            <Typography display="inline" align="center" variant="h6">"Ultimate tour guide"</Typography> the world's largest travel platform, It would helps millions of  travelers each month make every trip their best trip. Travelers across the globe use the Ultimate tour guide site and app to find out and reach there tour destination safely and exactly where they could go. Travlers can see thier destination in a map. People can participate any tour package which one we arrange by our Ultimate tour guide.</Typography>
                    </Paper>

                </Grid>

                <Grid item xs={1} md={2} lg={2} >
                </Grid>

            </Grid>
        </>
    );
}

export default About;