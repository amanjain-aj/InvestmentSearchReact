import * as React from 'react';
import { useHistory } from "react-router";
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
import { createTheme, ThemeProvider,makeStyles} from '@mui/material/styles';
import sideImage from '../assets/Group_427319310.svg';
import logo from '../assets/Group_427318265.png';
import checkIcon from '../assets/Group 5785.png';
import {LoaderComponent} from "../components/Common";
import {FormTextInput} from "../components/Common";
import * as Login from "../services";



const defaultTheme = createTheme({ shadows: ["none"] });

export default function SignInSide() {
  
  const [loader, setLoader] = React.useState(false);
  const [errorMessage, setMessage] = React.useState(null);
  let history = useHistory();
 
  const [userEmail, setUserEmail] = React.useState({
    value: "",
    error: false,
    success: false,
  });
  const [userPassword, setUserPassword] = React.useState({
    value: "",
    error: false,
    success: false,
  }); 

  const handleChangeEmail = (value) => {
    setMessage(null);
    setUserEmail(value);
  };

  const handleChangePassword = (value) => {
    setMessage(null);
    setUserPassword(value);
  };

  const handleSubmit = () => {
    setLoader(true);
    const data = {
      email: userEmail.value,
      password: userPassword.value,
    };
    Login(data).then((res)=>{
      const value = {
        id: res.data.data.user_id,
        token: res.data.data.access_token,
        email: userEmail,
        password:userPassword,
      };
      localStorage.setItem("user", JSON.stringify(value));
      setLoader(false);
    })
    .catch((e)=>{
      setLoader(false);
      if (e.response?.data) {
        setMessage(e.response.data.message);
      }
    })
    
  };

  let disable =
    userEmail.value === "" || userPassword.value === "";


  
   
   
    



  // React.useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user !== null) {
  //     window.location.reload();
  //     history.push(`/`);
  //   }
  // }, [history]);

  return (
    <ThemeProvider theme={defaultTheme}>
       {loader ? <LoaderComponent /> : null}
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
              my: 14,
              marginRight: 12,
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
            <Box sx={{ mt: 1 }}>
            <FormTextInput
              type="email"
              label='Email Id'
              placeholder='Email Id'
              Value={userEmail.value}
              onChangeText={handleChangeEmail}
              Validate={true}
              CustomErrorLine="Enter your email id"
              editable={true}
            />
            <FormTextInput
              type="password"
              label="Password"
              placeholder="Password"
              Value={userPassword.value}
              onChangeText={handleChangePassword}
              Validate={true}
              passwordVisibleIcon={true}
              editable={true}
            />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Id"
                name="email"
                autoComplete="email"
                autoFocus
               
                value={formValues.email.value}
                onChange={handleChange}
                error={formValues.email.error}
                helperText={formValues.email.error && formValues.email.errorMessage}
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
               
                value={formValues.password.value}
                onChange={handleChange}
                error={formValues.password.error}
                helperText={formValues.password.error && formValues.password.errorMessage}
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,borderRadius: 50}}
                disabled= {disable}
                onClick={handleSubmit}
              >
              Sign In
              </Button>
              {errorMessage && <h6 style={{ color: "red" }}>{errorMessage}</h6>}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}