import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const SwotAnalysis = (props) => {

    const {
        swotData
    } = props
    
    return (
        <>
             
                   
                        <Box sx={{
                           background: "#EFF4FF",
                           padding: "20px",
                           borderRadius: "10px",
                           width: "130px"
                        }}>
                        <Avatar
                        alt=""
                        sx={{ width: 60, height: 60, bgcolor: '#fff', color:"#000", marginBottom: "15px" }}
                        >
                        {swotData.number}
                        </Avatar>
                        <Typography variant="subtitle2" display="block">
                        {swotData.title}
                        </Typography>
                        <Typography variant="caption" display="block">
                        {swotData.value}
                        </Typography>
                        </Box>
                    
                
        </>
    )
}


export default SwotAnalysis;