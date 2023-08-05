import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const House = ({ img, price, address }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 250, marginBottom: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={img} alt="" style={{ maxWidth: "100%", height: "auto" }} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: "#D2042D" }}>
            Book
          </Button>
          <Button variant="outlined" color="primary" sx={{ backgroundColor: "#FFD700", color: "#D2042D", borderColor: "#FFD700" }}>
            View Space
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default House;
