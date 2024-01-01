import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
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
        renderOption={(props, option) => (
          < li {...props} key={option.latitude}>
            {option.label}
            <span style={{ marginLeft: 'auto' }}>{option.population}</span>
          </li>
        )}
      />
    </>
  )
}

export default SearchInput;