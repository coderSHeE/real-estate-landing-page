import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const SubscriptionCard = () => {
  return (
    <>
      <Typography variant="h3" sx={{
        marginBottom: '20px',
        mt: '60px',
        ml: '20px',
        fontWeight: '400',
        justifyContent: 'center',
        textAlign: 'center', // Center-align the text
        color: '#D2042D', // Change the text color to attract attention
      }}>
        Become Membership WorkX
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop : '5px',
              marginBottom : '30px' , 
              justifyContent: 'center',
              boxShadow: '0px 4px 8px rgba(210, 4, 45, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#D2042D',
              color: '#fff',
              display: 'flex', // Center the content
              flexDirection: 'column', // Center the content vertically
              alignItems: 'center', // Center the content horizontally
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                5 visits plan
              </Typography>
              <Typography variant="subtitle1" sx = {{ fontWeight : 'bold'}}>Rs. 999/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1"  sx = {{ fontWeight : 'bold'}}>5+ visits + 1000 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300 ', color: '#D2042D' }}>
                Proceed to Buy
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '20px',
              marginRight: '20px',
              marginTop : '5px',
              marginBottom : '30px' , 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#D2042D',
              color: '#fff',
              display: 'flex', // Center the content
              flexDirection: 'column', // Center the content vertically
              alignItems: 'center', // Center the content horizontally
            }}
          >

            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '20px' , color : '#ffd300' , fontWeight : 'bold' }}>
                20 visits plan
              </Typography>
             
              <Typography variant="subtitle1" sx = {{ fontWeight : 'bold'}}>Rs. 3999/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1"  sx = {{ fontWeight : 'bold'}}>20+ visits + 4000 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300', color: '#D2042D' }}>
                Proceed to Buy
              </Button>
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              marginLeft: '10px',
              marginRight: '10px',
              marginTop : '5px',
              marginBottom : '30px' , 
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              borderColor: '#D2042D',
              backgroundColor: '#D2042D',
              color: '#fff',
              display: 'flex', // Center the content
              flexDirection: 'column', // Center the content vertically
              alignItems: 'center', // Center the content horizontally
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                1 visits plan
              </Typography>
              <Typography variant="subtitle1" sx = {{ fontWeight : 'bold'}}>Rs. 299/-</Typography>
              <Typography variant="body1">Exclusive of taxes</Typography>
              <Typography variant="body1"  sx = {{ fontWeight : 'bold'}}>1+ visits + 200 credits</Typography>
              <Typography variant="body1">Valid for a year</Typography>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#ffd300', color: '#D2042D' }}>
                Proceed to Buy
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SubscriptionCard;
