import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from "@mui/material/Rating";
import Chip from '@mui/material/Chip';







const RatingCard = (props) => {

    const {
        ratingData
    } = props

    return(
        <>
          <Card sx={{padding: "10px"}}>
              <CardContent >
              <Grid container  spacing={12} sx={{display:"flex",justifyContent: "space-between"}}>
                <Grid item  xs={4} md={2}>
                <Stack direction="column" spacing={1}>
                <Typography variant='h6'>
                     {ratingData.provider}
                </Typography>
                 <Rating name="read-only" value={2} readOnly />
                 <Typography variant="subtitle2">
                     <span style={{fontWeight: "700"}}>{ratingData.overall_rating}</span><span style={{fontWeight: "200"}}>(90)</span>
                </Typography>
                </Stack>
                </Grid>
                <Grid item xs={4} md={8} >
                  <Grid item  sx={{marginBottom: "10px"}}>
                  <Stack direction="row" spacing={2}>
                  <Box component="section" sx={{ p: 1, border: '1px solid #D9D9D9', borderRadius: "5px",display:"flex" }} >
                  <div style={{position: "relative", top: -25, right: 0}}>
                    <Chip label="Stable" color='success' sx={{borderRadius: "4px", color: "#fff"}}/>
                  </div>
                    <Stack sx={{display: "flex",alignItems: "center", justifyContent: "space-between"}} direction="row" spacing={4}>
                    <Typography variant="subtitle2" display="block">
                        Ownership
                    </Typography>
                     <Box sx={{display: "flex",alignItems: "center"}}>
                      <Rating name="read-only"  size="small" value={1} readOnly max={1}/><span style={{fontWeight: "400", fontSize: "14px"}}>{ratingData.ownership_reviews_count}</span><span style={{fontWeight: "200",fontSize: "14px"}}>(90)</span>
                    </Box>
                    </Stack>
                  </Box>
                  <Box component="section" sx={{ p: 1, border: '1px solid #D9D9D9', borderRadius: "5px",display:"flex" }} >
                  <div style={{position: "relative", top: -25, right: 0}}>
                    <Chip label="Expensive" color='success' sx={{borderRadius: "4px", color: "#fff"}}/>
                  </div>
                    <Stack sx={{display: "flex",alignItems: "center", justifyContent: "space-between"}} direction="row" spacing={4}>
                    <Typography variant="subtitle2" display="block">
                        Valuation
                    </Typography>
                     <Box sx={{display: "flex",alignItems: "center"}}>
                      <Rating name="read-only"  size="small" value={1} readOnly max={1}/><span style={{fontWeight: "400", fontSize: "14px"}}>{ratingData.valuation_reviews_count}</span><span style={{fontWeight: "200",fontSize: "14px"}}>(90)</span>
                    </Box>
                    </Stack>
                  </Box>
                  </Stack>
                  </Grid>
                  <Grid item>
                  <Stack direction="row" spacing={2}>
                  <Box component="section" sx={{ p: 1, border: '1px solid #D9D9D9', borderRadius: "5px",display:"flex" }} >
                  <div style={{position: "relative", top: -25, right: 0}}>
                    <Chip label="Optimal" color='success' sx={{borderRadius: "4px", color: "#fff"}}/>
                  </div>
                    <Stack sx={{display: "flex",alignItems: "center", justifyContent: "space-between"}} direction="row" spacing={4}>
                    <Typography variant="subtitle2" display="block">
                        Efficiency
                    </Typography>
                     <Box sx={{display: "flex",alignItems: "center"}}>
                      <Rating name="read-only"  size="small" value={1} readOnly max={1}/><span style={{fontWeight: "400", fontSize: "14px"}}>{ratingData.efficiency_reviews_count}</span><span style={{fontWeight: "200",fontSize: "14px"}}>(90)</span>
                    </Box>
                    </Stack>
                  </Box>
                  <Box component="section" sx={{ p: 1, border: '1px solid #D9D9D9', borderRadius: "5px",display:"flex" }} >
                  <div style={{position: "relative", top: -25, right: 0}}>
                    <Chip label="Average" color='success' sx={{borderRadius: "4px", color: "#fff"}}/>
                  </div>
                    <Stack sx={{display: "flex",alignItems: "center", justifyContent: "space-between"}} direction="row" spacing={4}>
                    <Typography variant="subtitle2" display="block">
                        Financials
                    </Typography>
                     <Box sx={{display: "flex",alignItems: "center"}}>
                      <Rating name="read-only"  size="small" value={1} readOnly max={1}/><span style={{fontWeight: "400", fontSize: "14px"}}>{ratingData.financials_reviews_count}</span><span style={{fontWeight: "200",fontSize: "14px"}}>(90)</span>
                    </Box>
                    </Stack>
                  </Box>
                  </Stack>
                  </Grid>
                  </Grid>
                </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default RatingCard;
