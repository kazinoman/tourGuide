import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Grid, Paper, TextareaAutosize, Typography, Button } from "@material-ui/core";

export default function Message() {
  return (
    <div>
      {/* Messaeg Form. */}

      <Paper 
        elevation={3}
        style={{
          padding: "30px"
        }}
      >
        <FormControl size="medium">
          <FormLabel></FormLabel>
          <Grid 
            container 
            direction='row' 
            justify="space-between" 
            spacing={5}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                style={{ width: "100%" }}
                id=""
                label="Yout Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                style={{ width: "100%" }}
                id=""
                label="Your E-mail"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                style={{ width: "100%" }}
                id=""
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                style={{ width: "100%" }}
                id=""
                label="Subject"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* <TextField
                style={{ width: "100%" }}
                id=""
                label="Subject"
                variant="outlined"
              /> */}
              <TextareaAutosize
              style={{ width: "100%" }}
              rowsMin="10"
              placeholder="Message"
              >
              </TextareaAutosize>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <Button 
                variant="contained" 
                style={{color: "#3992e2"}}
                size="large">
                Submit
              </Button>
             
             
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </div>
  );
}
