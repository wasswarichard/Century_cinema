import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResourceNotFoundPage from './pages/ResourceNotFound/ResourceNotFoundPage';
import SearchPage from './pages/SearchPage/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

export interface IRoutePathsProps {}

const RoutePaths: FC<IRoutePathsProps> = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/details/:imdbID/:title" element={<MovieDetailsPage />} />
            <Route path="*" element={<ResourceNotFoundPage />} />
         </Routes>
      </BrowserRouter>
   );
};

export default RoutePaths;
