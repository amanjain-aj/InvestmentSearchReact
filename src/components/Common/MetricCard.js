import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'mui-image';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const MetricCard = (props) => {  

    const {
        metricValue
    } = props

    return(
        <>
         <Card sx={{width: "275px"}}>
                    <CardContent>
                    <Grid container justify='space-between' spacing={2}>
                    <Grid item >
                    <Avatar
                        alt=""
                        sx={{ width: 60, height: 60, bgcolor: '#fff' }}
                    >
                    <Image src={metricValue.icon} width={70} height={70} fit='contain'/>
                    </Avatar>
                    </Grid>
                    <Grid item>
                    <Typography
                        gutterBottom
                        variant='body2'
                    >
                        {metricValue.kpiMetric}
                    </Typography>
                    <Typography variant='h6'>
                    {metricValue.kpiValue}
                    </Typography>
                    </Grid>
                    </Grid>
                    </CardContent>
                </Card>
        </>
    )

}

export default MetricCard;
