import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const SearchInput = (props) => {

    const {
        renderData,
        Value,
        onChangeText
    } = props;
    return (
        <>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            value={Value}
            onChange={onChangeText}
            options={renderData.map((option) => option)}
            renderOption={(props, option) => {
        return (
        <Box sx={{
            padding: "10px",
        }}>
          <li {...props}
             style={{
                borderBottom: "1px solid #eee",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
          >
             <Typography component="p">
               {option.title}
             </Typography>
             <Typography component="p" sx={{
                background: "#0078FF",
                color: "#fff",
                padding: "5px",
                textTransform: "uppercase"
             }}>
               {option.year}
                </Typography>
           
          </li>
          </Box>
        );
      }}
    renderInput={(params) => (
    <TextField
        {...params}
        label="Search for stocks"
        InputProps={{
        ...params.InputProps,
        type: 'search',
        style: {
            borderRadius: "50px",
            boxShadow: "0px 0px 53px 2px #4149B233",
            background: "#ffffff"
        },
        
        startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{
                backgroundColor: "#0078FF",
                padding: "5px",
                borderRadius: "50px",
                color: "#ffffff",
                fontSize: "30px"
              }}/>
            </InputAdornment>
          ),
        }}
    />
    )}
/>

        </>
    )
    
}


export default SearchInput;