import React from 'react';

import style from './style.module.scss';
import {
   Button,
   FormControl,
   IconButton,
   Input,
   InputAdornment,
   Link,
   TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegisterPage: React.FC = () => {
   const [showPassword, setShowPassword] = React.useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };

   const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
   };
   return (
      <div>
         <h2 className={style.titleRegister}>Welcome to Chad</h2>
         <p className={style.textRegister}>
            Go live in 10 minutes! Our self-service widget empowers your customers to manage orders
            and track shipments 24/7 without driving you crazy.
         </p>
         <FormControl fullWidth className={style.formContainer}>
            <div className={style.labelContainer}>
               <label htmlFor="Email">Email</label>
               <TextField
                  fullWidth
                  id="filled-password-input"
                  variant="standard"
                  placeholder="megachad@trychad.com"
               />
            </div>
            <div className={style.labelContainer}>
               <label htmlFor="Your name">Your name</label>
               <TextField fullWidth id="filled-basic" variant="standard" placeholder="Mega Chad" />
            </div>
            <div className={style.labelContainer}>
               <label htmlFor="Password">Password</label>
               <Input
                  fullWidth
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label={showPassword ? 'hide the password' : 'display the password'}
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                           onMouseUp={handleMouseUpPassword}
                        >
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  }
               />
            </div>
            <Button
               fullWidth
               variant="contained"
               sx={{ bgcolor: 'rgba(50, 171, 242, 1)', textTransform: 'none' }}
            >
               Create account
            </Button>
         </FormControl>
         <p>
            Already have an account?
            <Link href="#" underline="hover">
               Login
            </Link>
         </p>
      </div>
   );
};

export default RegisterPage;
