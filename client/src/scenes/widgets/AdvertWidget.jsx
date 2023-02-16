import {  Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import Carousel from "react-material-ui-carousel";
import warren from "./../../assets/Warren.jpg";
import elon from "./../../assets/elon.jpg";
import tata from "./../../assets/tata.jpg";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Latest Topics in trend
        </Typography>
        <Typography color={medium}>Create News</Typography>
      </FlexBetween>


      <Carousel>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src={warren}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0", object: "cover"}} 
          
        />
        <img
          width="100%"
          height="auto"
          alt="advert"
          src={elon}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0", object: "cover" }}
        />

        <img
          width="100%"
          height="auto"
          alt="advert"
          src={tata}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" , object: "cover"}}
        />
      </Carousel>
      <FlexBetween>
        <Typography color={main}></Typography>
        <Typography color={medium}>cbnc.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Here are Warren Buffett’s latest moves to the Berkshire Hathaway stock
        portfolio
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
