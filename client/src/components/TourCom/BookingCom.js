import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'

import { useAuth0 } from "../../react-auth0-spa";

export default function BookingForm(props) {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    // console.log(isAuthenticated);
    const LoginButton  = (
    <Button 
        style={{
          boxShadow: "-1px 3px 69px -4px rgba(176,176,176,0.92)",
          padding: "20px 80px",
          background: "#3992e2",
          color:"#fff",
          border : "solid",
          border : "3px",
          borderColor: "#3992e2",
          borderRadius: "40px"
        }}
        size="large"
        ><Typography
            style={{
                fontFamily: "Lato",
                fontWeight: "300",
                fontSize: "18px",
                color: "#fff"
            }}
        >Book your tour</Typography>
    </Button>)
    return (
        <div>
            <Grid 
              container 
              style={{
                   boxShadow:"1px 13px 64px 40px #e7e7e7",
                   background :"#fff",
                   margin : "6rem 0rem",
                   padding: "5rem",
                   border: "solid",
                   borderColor: "#fff",
                   borderRadius: "20px"}}>
                <Grid 
                   container
                   direction="column"
                   justify="center"
                   item
                   xs={7}
                   >
                    <Grid item>
                        <Typography 
                          style={{
                            color: "#5274e6",
                            fontFamily: "Lato",
                            fontWeight: "700"}}
                          variant="h5"
                          >
                            WHAT ARE YOU WAITING FOR?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                          style={{fontFamily: "Lato",fontWeight:"300"}}
                          variant="h6"
                         >{props.details} days. 1 adventure. Infinite memories. Make it yours today!</Typography>
                    </Grid>
                </Grid>

                <Grid 
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item 
                  xs={5}
                  >
                    <Grid item>
                          { isAuthenticated ? LoginButton :  
                        <Button 
                            onClick={() => loginWithRedirect({})}
                            style={{
                              boxShadow: "-1px 3px 69px -4px rgba(176,176,176,0.92)",
                              padding: "20px 80px",
                              background: "#3992e2",
                              color:"#fff",
                              border : "solid",
                              border : "3px",
                              borderColor: "#3992e2",
                              borderRadius: "40px"
                        
                          }}
                          size="large">
                            <Typography
                                style={{
                                    fontFamily: "Lato",
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    color: "#fff"
                                }}
                                >LOG IN TO BOOK TOUR</Typography></Button> }
                      </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
