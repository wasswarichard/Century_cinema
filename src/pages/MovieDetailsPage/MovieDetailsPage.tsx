import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Breadcrumbs, Loader, Alert } from '../../components';
import { Grid, Snackbar } from '@mui/material';
import DetailsInfo from './DetailsInfo';

export interface IMovieDetailsProps {}
const MovieDetailsPage: FC<IMovieDetailsProps> = () => {
   const { imdbID } = useParams<string>();
   const { data, loading } = useFetch({
      i: imdbID,
   });

   const breadcrumbs = [
      { label: 'Explorer', navigateTo: '/' },
      { label: 'Movies', navigateTo: '/' },
      { label: `${data?.Title}`, navigateTo: `/details/${imdbID}` },
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
         {!loading && data?.Error && (
            <Snackbar
               open={!loading}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
            >
               <Alert severity="error">{data?.Error}</Alert>
            </Snackbar>
         )}
      </Grid>
   );
};

export default MovieDetailsPage;
