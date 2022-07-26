import React from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import bg from "../Images/bg.png";
import bg2 from "../Images/bg2.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Home = () => {
  return (
    <>
      <Box>
        <AliceCarousel autoPlay={true} fadeoutAnimation={true} autoPlayInterval="1000" disableButtonsControls={true}>
          <img src={bg} alt="" width={"100%"} />
          <img src={bg2} alt="" width={"100%"} />
          <img src={bg} alt="" width={"100%"} />
          </AliceCarousel>
      </Box>

    </>
  )
}

export default Home