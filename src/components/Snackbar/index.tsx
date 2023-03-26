import React, { FC } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Snackbar as Materialsnackbar } from '@mui/material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface ISnackbarProps {
   loading: boolean;
   message: string;
}

const Snackbar: FC<ISnackbarProps> = ({ loading, message }) => {
   return (
      <Materialsnackbar
         open={!loading}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         style={{ marginTop: '4rem' }}
      >
         <Alert severity="error"> {message || 'Something went wrong. Please try again.'}</Alert>
      </Materialsnackbar>
   );
};

export default Snackbar;
