import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchData } from './Redux/country/countrySlice';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:name" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
