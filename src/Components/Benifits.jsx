import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import freelancersImage from '../media/alizee-baudez-QElq3IdWzlQ-unsplash.jpg';
import startupsImage from '../media/headway-jfR5wu2hMI0-unsplash.jpg';
import startupsImage1 from '../media/waveX.png';
import startupsImage2 from '../media/proxyclick-visitor-management-system-BgT-ZKC6WA4-unsplash.jpg';
import startupsImage3 from '../media/slidebean-DbobuPLJoZo-unsplash.jpg';


const coworkingData = [
  {
    title: 'Coworking space for freelancers and consultants',
    content: 'Freelancers & Business Travellers\nOn demand, Pay per use plans. Work from your nearest WorkStationX only 2 kms away.',
    imageUrl : freelancersImage, }

    ,
  {
    title: 'Coworking space for startups',
    content: 'Early stage startups & Non-Profits\nReserved desk or cabin in a shared space. Lowest price guarantee and fully serviced spaces.',
    imageUrl: startupsImage, // Add appropriate image URL
  },
  {
    title: 'Coworking space for small business',
    content: 'Growing Companies & Small Businesses\nGet a privately managed, custom office. Take up an entire floor or a shared private space.',
    imageUrl: startupsImage1, // Add appropriate image URL
  },
  {
    title: 'Shared coworking office space for remote workers',
    content: 'Remote & Mobile Teams\nOn demand, Pay per use plans. Book desks or meeting rooms by the day.',
    imageUrl: startupsImage2, // Add appropriate image URL
  },
  {
    title: 'Coworking Spaces for Entrepreneurs and business',
    content: 'New and Expanding Businesses\nGet an address for your business anywhere in the country. In-office reception and mailing services.',
    imageUrl: startupsImage3, // Add appropriate image URL
  },
];

const CoworkingSections = () => { 
  return (
    <div style={{ mt: 0, backgroundColor: "#ffebea", py: 10, marginBottom : '15px' }}>
      <Typography variant="h3" component="h3" style={{
          marginBottom: '20px',
         
          marginTop : '30px',
          fontWeight: '400',
          justifyContent: 'center',
          textAlign: 'center', // Center-align the text
          color: '#D2042D', 
         }}>
        Workspaces for everyone.
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginTop: "20px" , marginBottom : '25px' }}>
        Whether you are a freelancer, early-stage start-up, or an enterprise. Find the workspace that's right for you.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {coworkingData.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' , marginLeft : '22px' , marginRight: '22px' }}>
              <CardMedia
                component="img"
                height="140"
                image={section.imageUrl}
                alt={section.title}
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {section.title}
                </Typography>
                <Typography variant="body2">{section.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CoworkingSections;
