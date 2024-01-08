import React from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { CityData } from '../types/citydata';

interface SearchInputProps {
  data: CityData[];
}

const SearchInput = ({ data }: SearchInputProps) => {
  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={data.map((option) => ({
          label: `${option.state}, ${option.city}`,
          population: option.population,
          latitude: option.latitude,
        }))}
        getOptionLabel={(option) => typeof option === 'string' ? option : option.label}
        renderInput={(params) => <TextField {...params} label="City or State" />}
        renderOption={(props, option, state) => (
          <li {...props} key={option.latitude}>
            <Typography>
              {highlightMatch(option.label, state.inputValue)}
            </Typography>
            <span style={{ marginLeft: 'auto' }}>{option.population}</span>
          </li>
        )}
      />
    </>
  );
};

const highlightMatch = (label: string, inputValue: string) => {
  if (!inputValue) return label;

  const index = label.toLowerCase().indexOf(inputValue.toLowerCase());
  if (index === -1) return label;

  return (
    <>
      {label.substring(0, index)}
      <span style={{ backgroundColor: 'yellow' }}>
        {label.substring(index, index + inputValue.length)}
      </span>
      {label.substring(index + inputValue.length)}
    </>
  );
};

export default SearchInput;