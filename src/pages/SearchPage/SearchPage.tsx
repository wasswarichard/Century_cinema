import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Breadcrumbs, Loader, Pagination, Alert } from '../../components';
import ImageCard from '../../components/ImageCard';
import './index.sass';
import { Grid, Snackbar, TextField, Typography } from '@mui/material';

export interface ISearchPageProps {}
type IResult = {
   Poster: string;
   Title: string;
   Type: string;
   Year: string;
   imdbID: string;
};

const SearchPage: FC<ISearchPageProps> = () => {
   const navigate = useNavigate();
   const [searchField, setSearchField] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPage, setTotalPages] = useState<number>();
   const { data, loading } = useFetch({
      page: currentPage,
      s: searchField,
   });
   const [displayData, setDisplayData] = useState<IResult[]>([]);

   useEffect(() => {
      setDisplayData(data?.Search);
      if (data?.totalResults) {
         setTotalPages(Math.trunc(parseInt(data?.totalResults as string) / data?.Search.length));
      }
   }, [data]);

   const onPageChange = (newPage: number) => {
      setCurrentPage(newPage);
   };

   const handleOnClickCard = (imdbID: string) => {
      navigate(`/details/${imdbID}`);
   };
   const breadcrumbs = [
      { label: 'Explorer', navigateTo: '/' },
      { label: 'Movies', navigateTo: '/' },
   ];

   return (
      <Grid container style={{ marginTop: '85px' }}>
         <Grid item xs={12}>
            <Breadcrumbs data={breadcrumbs} />
         </Grid>
         <Grid item xs={12} sm={3} sx={{ mt: 2 }}>
            <Typography>Search Movie</Typography>
            <TextField
               id="searchField"
               name="searchField"
               value={searchField}
               size="small"
               onChange={(e) => setSearchField(e.target.value)}
            />
         </Grid>
         <Grid item xs={12} sm={9}>
            {data?.totalResults && (
               <Pagination
                  pages={totalPage}
                  page={currentPage}
                  onPageChange={onPageChange}
                  previousText="Previous"
                  nextText="Next"
               />
            )}
         </Grid>
         <Grid item xs={12}>
            <div className="cards">
               {displayData?.map((result) => (
                  <ImageCard
                     key={result.imdbID}
                     imdbID={result.imdbID}
                     title={result.Title}
                     url={result.Poster}
                     year={result.Year}
                     handleOnClickCard={handleOnClickCard}
                  />
               ))}
            </div>
            <div>{loading && <Loader />}</div>
         </Grid>
         {searchField && !data?.Search && !loading && (
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

export default SearchPage;
