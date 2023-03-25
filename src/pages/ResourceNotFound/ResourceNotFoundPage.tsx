import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import './index.sass';

export interface IResourceNotFoundProps {}

const ResourceNotFound: FC<IResourceNotFoundProps> = () => {
   return (
      <Grid container className="container">
         <Typography variant="h5">Page not found</Typography>
         <Typography variant="body1" className="dashboardLink">
            <Link to="/">Go to dashboard</Link>
         </Typography>
      </Grid>
   );
};

export default ResourceNotFound;
