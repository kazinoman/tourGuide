import React from "react";
import getSymbolFromCurrency from 'currency-symbol-map';
import {Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Grid , CardActions, Button, CardMedia, Typography} from "@material-ui/core";
// MATERIALS ICONS
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PlaceIcon from '@material-ui/icons/Place'; 
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import PersonIcon from '@material-ui/icons/Person';
import './TourCard.css';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '230px',
    opacity: "0.8"
  },
});

function getCusMonth (Month) {
  const month = Month;
  if(month === 0){
    return "Jan"
  } else if(month === 1) {
    return "Feb"
  } else if(month === 2) {
    return "Mar"
  } else if(month === 3) {
    return "Apr"
  } else if(month === 4) {
    return "May"
  } else if(month === 5) {
    return "Jun"
  } else if(month === 6) {
    return "July"
  } else if(month === 7) {
    return "Aug"
  } else if(month === 8) {
    return "Sep"
  } else if(month === 9) {
    return "Oct"
  } else if(month === 10) {
    return "Nov"
  } else if(month === 11) {
    return "Dec"
  } 
  
  return Month;
}

export default function TourCard(props) {

  const classes = useStyles();
  const date = new Date(props.startDate)
  // console.log(props);

 
  return (
    <div className="zoom">
 
      {/* <TourDetails cost={props.cost} /> */}
      <Card className={classes.root}>
        <CardMedia 
        className={classes.media}
        image={require(`../../../img/${props.image}`)}
        title={props.location}
        ><h2 className="header" style={{display: "flex",color: "#f7f7f7",margin: "0px 0px",height:"235px", justifyContent:"flex-end", alignItems:"flex-end"}}>{props.location}</h2></CardMedia>
        {/* <CardContent>
          <Typography
            align="right"
            variant="h5">{props.location}</Typography>
        </CardContent> */}

        <CardContent>
          <Typography  style={{fontFamily: "Lato, sans-serif", fontWeight: "bold", paddingBottom: "10px" }}>{props.difficulty} {props.duration}-Day tour</Typography>
          <Typography style={{fontFamily: "Lato, sans-serif",fontSize: "1rem", fontStyle: "italic"}} className="summery">{props.summary}</Typography>
        </CardContent>

        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={6}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: "wrap"
                }}>
                 <PlaceOutlinedIcon style={{color:"#3992e2"}}/>
                 {/* <span>{props.location}</span> */}
                   <Typography style={{fontFamily: "Raleway, sans-serif"}}>{props.location}</Typography>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: "wrap",
                  marginTop: "15px"
                }}>
                 <PersonIcon style={{color:"#3992e2"}}/>
                 {/* <span>{props.location}</span> */}
                   <Typography >{props.maxPeople}<Typography display="inline" style={{fontFamily: "Raleway, sans-serif"}}> people</Typography></Typography>
                </div>   
            </Grid>
            <Grid item xs={6}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: "wrap"
                   }}>
                 <CalendarTodayIcon style={{color:"#3992e2"}}/>
                 {/* <span>{props.location}</span> */}
                   <Typography style={{fontFamily: "Raleway, sans-serif"}}>{getCusMonth(date.getMonth())} {date.getFullYear()}</Typography>
                </div>  
            </Grid>
          </Grid>
        </CardContent>
        <CardContent style={{background: "#f7f7f7"}}>
          <Grid container>
            <Grid item xs={6}>
              <Typography style={{fontFamily: "Raleway, sans-serif"}}>{getSymbolFromCurrency("BDT")} {props.cost} per person</Typography>
              <Typography >{props.rating} rating <Typography display="inline" style={{fontFamily: "Raleway, sans-serif"}}>({props.personRating})</Typography></Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>

              <CardActions>
                 <Link style={{textDecoration: "none"}} to={{pathname:`/tour/${props.location}`, state:{data: props}} }> 
                     <Button
                      style={{fontFamily: "Raleway"}}
                      variant="contained"
                      size="large"
                      
                     >Details</Button>  
                 </Link>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
