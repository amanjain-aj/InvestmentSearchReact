import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sideImage from '../assets/Group_427319310.svg';
import logo from '../assets/Group_427318265.png';
import checkIcon from '../assets/Group 5785.png';



const defaultTheme = createTheme({ shadows: ["none"] });

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${sideImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'left',
          }}
        >
        <Box
            sx={{
              mt: 25,
              mx: 4,
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems: "left"
              
            }}
          >
        <Image src={checkIcon} width={30} height={30}/>
        <Typography component='h1' variant='h5' marginTop={2}>
        Experience Seamless Stock Search Here
        </Typography>
        <Typography component='p' variant='p'>
        Kanini Ticker Platform
        </Typography>
        </Box>
        </Grid>
       
       
        <Grid item xs={12} sm={8} md={5} component={Paper}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
            
              
            }}
          >
            
            <Image src={logo} width={150} height={100} fit='contain'/>
           
            <Typography component="h1" variant="h5" align='left'>
              Sign In
            </Typography>
            <Typography component="p">
             Welcome back! Please enter email id and password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Id"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,borderRadius: 50}}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}