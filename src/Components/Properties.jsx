import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexWrap : "wrap",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column", // Fixed typo here
      alignItems: "center",
      gap: theme.spacing(3),
      marginTop : '2px',
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(1), // Adjust the gap for smaller screens
      },
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#ffebea", py: 10 }}>
      <Container>
        <PropertiesTextBox >
          <Typography variant="h3" sx={{ color: "#D2042D" , ml : 2}}>
            Featured Spaces 
          </Typography>
          <Typography variant="h6" sx={{ color: "#5A6473", mt: 1 , ml : 2}}>
          Discover Productive Spaces
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox style={{ color : '#D2042D' , mb : 2}}>
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
