import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/Group_427318265.png';
import LockIcon from '@mui/icons-material/Lock';
import Image from 'mui-image';
import { createTheme, ThemeProvider,styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Icon1 from "../assets/Group_3.png";
import Icon2 from "../assets/Group 33 (4).png";
import Icon3 from "../assets/Group 33 (5).png";
import Icon4 from "../assets/Group 33 (6).png";
import Rating from "@mui/material/Rating";
import {MetricCard} from "../components/Common";
import {SwotAnalysis} from "../components/Common";
import {RatingCard} from "../components/Common";

export default function DashboardPage() {

const defaultTheme = createTheme(
    { 
        shadows: ["1"] ,
        palette: {
            // primary: {
            //   main: '#FF5733',
            //   // light: will be calculated from palette.primary.main,
            //   // dark: will be calculated from palette.primary.main,
            //   // contrastText: will be calculated to contrast with palette.primary.main
            // },
            // secondary: {
            //   main: '#E0C2FF',
            //   light: '#F5EBFF',
            //   // dark: will be calculated from palette.secondary.main,
            //   contrastText: '#47008F',
            // },
            success: {
                main: '#B9DD4E'
            },
            white: {
                main: '#ffffff'
            }
          },
    }
    ); 
    const [value, setValue] = React.useState(2);
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "#fff",
          color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
    }));

    function createData(metrics, values) {
        return { metrics, values };
    }

    const metricData = [
      {
        kpiMetric: "Today's High",
        kpiValue: " 144.65",
        icon: `${Icon1}`
      },
      {
        kpiMetric: "Today's High",
        kpiValue: "161.5",
        icon:`${Icon2}`
      },
      {
        kpiMetric: "Today's High",
        kpiValue: "161.5",
        icon: `${Icon3}`
      },
      {
        kpiMetric: "Today's High",
        kpiValue: "161.5",
        icon: `${Icon4}`
      }
      
    ]

    const swotDataItems = [
      {
        number: "8",
        title: "Strengths",
        value: "Strong Annual EPS Growth"
      },
      {
        number: "8",
        title: "Weaknesses",
        value: "Strong Annual EPS Growth"
      },
      {
        number: "8",
        title: "Opportunites",
        value: "Strong Annual EPS Growth"
      },
      {
        number: "8",
        title: "Growth",
        value: "Strong Annual EPS Growth"
      }
    ]

    const RatingDataItems = [
      {
        provider: "Finstar",
        overall_rating :"20",
        ownership_reviews_count : "3.0",
        valuation_reviews_count : "2.5",
        efficiency_reviews_count : "1.5",
        financials_reviews_count : "3.0"
      }
    ]

    const rows = [
        createData('MARKET CAP', 17908027),
        createData('ENTERPRISES VALUE', 17908027),
        createData('NO. OF SHARES', 17908027),
        createData('DIV YIELD', 17908027),
        createData('CASH', 17908027),
        createData('PROMOTER HOLDING',17908027),
    ];


  return (
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#ffffff",marginBottom: "10px" }}>
        <Toolbar sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-between'
        }}>
        <Image src={Logo} width={100} height={50} fit='contain' alt="Kanini"/>
        <Button  variant="contained" startIcon={<LockIcon/> } sx={{borderRadius: 50}}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container spacing={2} sx={{
         backgroundColor: '#f6f8fc',
         paddingLeft: 4,
         paddingRight: 4,
         paddingBottom: 4
    }}>
        <Grid item xs={12} md={12}>
            
        </Grid>
        <Grid item xs={6} md={8}>
        <Typography variant="h6" mb={1} sx={{lineHeight: 1}}>
         Oil & Natural Gas Corporation Ltd
         </Typography>
         <Stack spacing={2} direction="row">
         <Typography variant="caption" display="block">
            <span>NSE: <span style={{backgroundColor: "#B9DD4E", padding: "4px", color: "#ffffff"}}>ONGC</span></span>
         </Typography>
         <Typography variant="caption" display="block">
            <span>BSE: <span style={{backgroundColor: "#B9DD4E", padding: "4px", color: "#ffffff"}}>500312</span></span>
         </Typography>
         <Typography variant="caption" display="block">
            <span>SECTOR: <span style={{ padding: "4px", color: "#B9DD4E", fontWeight: "400"}}>Oil Exploration</span></span>
         </Typography>
         </Stack>
        </Grid>
        <Grid item xs={6} md={4} sx={{
          display:"flex",
        justifyContent:"flex-end",
        marginTop: 0.5  
        }}>
        <Stack direction="row" spacing={1}>
            <Chip icon={<ArrowDropUpIcon color='white'/>} label="142.35" color="success" sx={{borderRadius: 0, color: "#fff"}}/>
             <Stack direction="column">
             <Typography variant="subtitle2" sx={{padding: 0,margin:0, lineHeight: 1}}>
                +1.65 (1.17%)
              </Typography>
              <Typography variant="caption" display="block">
                <span style={{fontSize: "10px"}}>NSE: <span style={{fontSize: "8px", color: "#8a8a8a"}}>Today 3:31PM</span></span>
              </Typography>
             </Stack>
        </Stack>
        </Grid>
        
        <Grid item xs={12} md={12} mt={1} >
           <Box>
            <Stack direction="row" spacing={2} style={{justifyContent: "space-between"}}>
              {
                metricData.map((item)=>{
                  return (
                    <MetricCard 
                    metricValue={item}
                  />
                  )
                
                })
              }
            </Stack>
            </Box>
        </Grid>
        
        <Grid item xs={6} md={8} >
          
           <Grid item >
           <Card sx={{marginBottom: "20px"}}>
                <CardContent >
                <Stack direction="row" spacing={2} sx={{display: "flex",justifyContent: "space-between"}}>
                {
                swotDataItems.map((item)=>{
                  return(
                    <SwotAnalysis
                      swotData = {item}
                    />
                  )
                })
              }
              </Stack>
           </CardContent>
            </Card>
             
            </Grid>
            <Grid item>
                {
                  RatingDataItems.map((item)=>{
                    return(
                      <RatingCard 
                      ratingData= {item}
                      />
                    )
                  })
                }
            </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card>
            <CardContent>
            <TableContainer>
      <Table sx={{ minWidth: 350 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Essentials</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.metrics}>
                <StyledTableCell align="left">{row.metrics}</StyledTableCell>
              <StyledTableCell align="right">{row.values}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </CardContent>
          </Card>
        
        </Grid>
        </Grid>
    </ThemeProvider>
  );
}