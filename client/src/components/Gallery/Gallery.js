import React,{useState,useEffect} from 'react';
import axios from 'axios';

import {GridList, GridListTile,GridListTileBar, TextField, Typography} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';


export default function Gallery() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        async function getData() {
          const result = await axios.get("http://localhost:3001/api/tours");
          console.log(result.data.tour);
          setImage(result.data.tour);
        }
        // CALL GETTOUR FUNCTION
        getData();
      }, []);

      let imageListContent;
      if(image) {
        imageListContent = (
          <GridList 
            col={2} 
            spacing={0}
            style={{margin:"2rem 0rem"}}>
            {image.map(data =>(
              <GridListTile
                key={data.photo}
                style={{
                  height: "25rem",
                  border:"solid",
                  borderColor: "#fff",
                  borderRadius :"5px"
                }}
              >
                <img src={require(`../../../img/${data.photo}`)} alt="" />
                <GridListTileBar 
                   title={<Typography style={{fontFamily: "Inter"}}>{data.location}</Typography>}
                   subtitle={
                      <Typography 
                        style={{fontFamily: "Inter"}}>{data.summary}
                      </Typography>}
                   actionIcon={
                     <IconButton 
                        style={{
                          color: "#fff",
                          padding: "12px"}}>
                       <ZoomInIcon 
                          fontSize="large"
                       />
                     </IconButton>
                   }
                />
              </GridListTile>
            ))}
          </GridList>
        )
      } else {
        imageListContent = null;
      }

    return (
        <div>
          <Typography style={{
            fontFamily: "Satisfy",
            paddingTop: "5rem"
          }} align="center" variant="h4">Image Gallery</Typography>
            {imageListContent}
        </div>
    )
}