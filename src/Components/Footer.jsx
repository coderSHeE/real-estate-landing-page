import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#D2042D",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#D2042D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Products
          </Typography>

          <FooterLink>Listing</FooterLink>
          <br />
          <FooterLink>Properties</FooterLink>
          <br />
          <FooterLink>Agents</FooterLink>
          <br />
          <FooterLink>Blog</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#D2042D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>

          <FooterLink>Our Homes</FooterLink>
          <br />
          <FooterLink>Stories</FooterLink>
          <br />
          <FooterLink>Video</FooterLink>
          <br />
          <FooterLink>Free Trial</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#D2042D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of use</FooterLink>
          <br />
          <FooterLink>Privacy</FooterLink>
          <br />
          <FooterLink>Sitemap</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#D2042D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#D2042D",
              fontWeight: "500",
              mb: 2,
            }}
          >
            You’ll find your next home, in any style you prefer.
          </Typography>

          <IconBox>
            <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
            <img
              src={twitterIcon}
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            <img
              src={linkedinIcon}
              alt="linkedinIcon"
              style={{ cursor: "pointer" }}
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
