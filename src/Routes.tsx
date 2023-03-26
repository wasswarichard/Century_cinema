import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import { PageNotFound } from './components';

export interface IRoutePathsProps {}

const RoutePaths: FC<IRoutePathsProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/details/:imdbID/:title" element={<MovieDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutePaths;
