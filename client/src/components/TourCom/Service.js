import React from 'react'
import Typography from '@material-ui/core/Typography'

import Accomodation from './asset2/accomodation.png';
import Doctor from './asset2/doctor.png';
import Electricity from './asset2/electricity.png';
import Food from './asset2/food.png';
import Privacy from './asset2/privacy.png';
import Safety from './asset2/safety.png';
import Sightseeing from './asset2/sightseeing.png';
import Transport from './asset2/transport.png';
import Grid from '@material-ui/core/Grid';
import './Service.css';


export default function Service() {
    return (
        <div style={{background: "#fff"}} className="com">
            <Typography 
                style={{paddingTop: "2rem", fontFamily: "Raleway"}} 
                align="center" variant="h3" 
                color="initial">Best Services</Typography>
            <Grid
               style={{paddingTop: "3rem", margin: "0px"}} 
               container 
               direction="row"
               justify="space-evenly" 
               alignItems="center" 
               spacing={1}>

                <Grid 
                   className="item"
                   container 
                   spacing={2}
                   direction="column" 
                   justify="space-evenly" 
                   alignItems="center" 
                   item 
                   xs={10} sm={5} md={4} lg={2}>
                    <Grid item>
                        <img  src={Accomodation} alt="" className="logo"/>
                    </Grid>
                    <Grid item>
                        <Typography 
                            style={{
                                fontFamily: "Raleway", 
                                fontWeight: "bold", 
                                fontSize: "1.3rem"}}
                            variant="h5" 
                            color="initial">ACCOMODATION</Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                           style={{
                            fontFamily: "Raleway",  
                            fontSize: ".9rem"}}
                           align="center" 
                           variant="h6" 
                           color="initial">We try to provide the best accomodation that is possible to provide.</Typography>
                    </Grid>
                </Grid>

                <Grid 
                   container
                   className="item"
                   spacing={2} 
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   item 
                   xs={10} sm={5} md={4} lg={2}>
                    <Grid item>
                        <img  src={Privacy} alt="" className="logo"/>
                    </Grid>
                    <Grid item>
                        <Typography 
                           style={{
                            fontFamily: "Raleway", 
                            fontWeight: "bold", 
                            fontSize: "1.3rem"}}
                           variant="h5" 
                           color="initial">PRIVACY</Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                           style={{
                            fontFamily: "Raleway",  
                            fontSize: ".9rem"}}
                           align="center" 
                           variant="h6" 
                           color="initial">We value the privacy of our visitors. We try to keep our visitors safe and sound.</Typography>
                    </Grid>
                </Grid>

                <Grid 
                   container 
                   spacing={2}
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   item 
                   xs={10} sm={5} md={4} lg={2}
                   className="item">
                    <Grid item>
                        <img  src={Food} alt="" className="logo"/>
                    </Grid>
                    <Grid item>
                        <Typography 
                           style={{
                            fontFamily: "Raleway", 
                            fontWeight: "bold", 
                            fontSize: "1.3rem"}}
                           variant="h5" 
                           color="initial">GOOD FOOD</Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            style={{
                                fontFamily: "Raleway",  
                                fontSize: ".9rem"}}
                            align="center" 
                            variant="h6" 
                            color="initial">We provide the best kind of regional food to satisfy your delicacy.</Typography>
                    </Grid>
                </Grid>

                <Grid 
                   container 
                   spacing={2}
                   direction="column" 
                   justify="center" 
                   alignItems="center" 
                   item 
                   xs={10} sm={5} md={4} lg={2} 
                   className="item">
                    <Grid item>
                        <img  src={Transport} alt="" className="logo"/>
                    </Grid>
                    <Grid item>
                        <Typography 
                           style={{
                               fontFamily: "Raleway", 
                               fontWeight: "bold", 
                               fontSize: "1.3rem"}}
                           variant="h5" 
                           color="initial">TRANSPORT</Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            style={{
                                fontFamily: "Raleway",  
                                fontSize: ".9rem"}}
                            align="center" 
                            variant="h6" 
                            color="initial">We provide the best transport for our visitors so that they can enjoy their trip.</Typography>
                    </Grid>
                </Grid>   
            </Grid>
        </div>
    )
}
