import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Breadcrumbs, Loader, Snackbar } from '../../components';
import { Grid } from '@mui/material';
import DetailsInfo from './DetailsInfo';

export interface IMovieDetailsProps {}
const MovieDetailsPage: FC<IMovieDetailsProps> = () => {
   const { imdbID, title } = useParams<string>();
   const { data, loading } = useFetch({
      i: imdbID,
   });

   const breadcrumbs = [
      { label: 'Explorer', navigateTo: '/' },
      { label: 'Movies', navigateTo: '/' },
      { label: `${title}`, navigateTo: `/details/${imdbID}/${title}` },
   ];

   return (
      <Grid container style={{ marginTop: '85px' }}>
         <Grid item xs={12}>
            <Breadcrumbs data={breadcrumbs} />
         </Grid>
         <Grid item xs={12}>
            {data && <DetailsInfo details={data} />}
         </Grid>
         <Grid item xs={12}>
            <div>{loading && <Loader />}</div>
         </Grid>
         {!loading && data?.Error && <Snackbar loading={loading} message={data?.Error} />}
      </Grid>
   );
};

export default MovieDetailsPage;
