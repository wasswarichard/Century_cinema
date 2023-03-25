import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './index.sass';

export interface IImageCardProps {
   imdbID: string;
   url: string;
   title: string;
   year: string;
   handleOnClickCard: (imdbID: string) => void;
}

const ImageCard: FC<IImageCardProps> = ({ imdbID, url, title, year, handleOnClickCard }) => {
   return (
      <Card sx={{ maxWidth: 400 }} className="card" onClick={() => handleOnClickCard(imdbID)}>
         <CardMedia component="img" height="245" image={url} data-src={url} alt={title} />
         <CardContent>
            <Typography gutterBottom variant="h6" component="div">
               {title}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
               {year}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default ImageCard;
