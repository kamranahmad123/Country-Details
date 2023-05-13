import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('country', async () => {
  const request = await fetch('https://restcountries.com/v3.1/all');
  const result = await request.json();
  const getData = result.map((data) => ({
    name: data.name.common,
    capital: data.capital,
    continent: data.continents[0],
    flag: data.flags.png,
    population: data.population,
    map: data.maps.googleMaps,
    area: data.area,
  }));

  return getData;
});

const initialState = {
  country: [],
  loading: false,
  error: null,

};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        country: action.payload,
      }))
      .addCase(fetchData.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export default countrySlice.reducer;
