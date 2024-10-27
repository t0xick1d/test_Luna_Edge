import React from 'react';
import logo from './Chad.svg';
import style from './App.module.scss';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import RegisterPage from './types/components/register/Register';
import ShopifyC from './types/components/shopify/ShopifyC';

const App: React.FC = () => {
   const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };
   const setActiveBox = () => {
      if (activeStep === 0) {
         return <RegisterPage />;
      }
      if (activeStep === 1) {
         return <ShopifyC />;
      }
      if (activeStep === 2) {
         return <h1>step 3</h1>;
      }
      if (activeStep === 3) {
         return <h1>step 4</h1>;
      }
   };
   return (
      <div className={style.app}>
         <div className={style.mainContainer}>
            <header className={style.header}>
               <img src={logo} alt="logo" />
               <h1>Chad</h1>
            </header>
            <section className={style.section}>
               <div className={style.stepDiv}>Step {activeStep + 1} of 4</div>
               <MobileStepper
                  variant="progress"
                  steps={4}
                  position="static"
                  activeStep={activeStep}
                  sx={{ border: 'rgba(50, 171, 242, 1)' }}
                  nextButton={
                     <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                     </Button>
                  }
                  backButton={
                     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                     </Button>
                  }
               />
               <Box>{setActiveBox()}</Box>
            </section>
         </div>
      </div>
   );
};

export default App;
