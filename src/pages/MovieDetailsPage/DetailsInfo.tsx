import { FC } from 'react';
import { Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';

const DetailsInfo: FC<any> = ({ details }) => {
   return (
      <Table style={{ marginTop: '25px' }}>
         <TableBody>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">imdbID</Typography>
               </TableCell>
               <TableCell data-testid="movie-title">
                  <Typography variant="body1">{details.imdbID}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Plot</Typography>
               </TableCell>
               <TableCell data-testid="movie-plot">
                  <Typography variant="body1">{details.Plot}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Runtime</Typography>
               </TableCell>
               <TableCell>
                  <Typography variant="body1">{details.Runtime}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Genre</Typography>
               </TableCell>
               <TableCell>
                  <Typography variant="body1">{details.Genre}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Actors</Typography>
               </TableCell>
               <TableCell>
                  <Typography variant="body1">{details.Actors}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Language</Typography>
               </TableCell>
               <TableCell>
                  <Typography variant="body1">{details.Language}</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
               <TableCell>
                  <Typography variant="body1">Released</Typography>
               </TableCell>
               <TableCell>
                  <Typography variant="body1">{details.Released}</Typography>
               </TableCell>
            </TableRow>
         </TableBody>
      </Table>
   );
};

export default DetailsInfo;
