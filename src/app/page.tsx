'use client'
import * as React from 'react';
import { Container, Typography } from '@mui/material'
import { CityData } from '../types/citydata';
import SearchInPut from '../components/SearchInPut';

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
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-6">
      <Typography variant="h4" >
        Type state or city:
      </Typography>
      <Container sx={{
        width: { xs: '50vw', sm: '300px', md: '400px', lg: '450px' },
      }
      }>
        <SearchInPut data={data} />
      </Container>
    </main>
  )
}