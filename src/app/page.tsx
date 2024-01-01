'use client'
import * as React from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material'
import { CityData } from '../types/citydata';

export default function Home() {
  const [data, setData] = React.useState<CityData[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        const response = await fetch(endpoint);
        const citiesData = await response.json();
        setData(citiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Stack spacing={2} sx={{ width: 400 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={data.map((option) => ({
            label: `${option.state}, ${option.city}`,
            population: option.population,
          }))}
          getOptionLabel={(option) => typeof option === 'string' ? option : option.label}
          renderInput={(params) => <TextField {...params} label="City or State" />}
          renderOption={(props, option) => (
            <li {...props}>
              {option.label}
              <span style={{ marginLeft: 'auto' }}>{option.population}</span>
            </li>
          )}
        />
      </Stack>
    </main>
  )
}