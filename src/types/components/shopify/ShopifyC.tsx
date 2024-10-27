import React from 'react';
import Success from './Frame 134.svg';

import style from './style.module.scss';
import { Button } from '@mui/material';

const ShopifyC: React.FC = () => {
   const ulData = [
      {
         title: 'Track orders and shipping',
         p: 'Global coverage with 600+ couriers supported',
      },
      {
         title: 'Manage orders',
         p: 'Allow customers to track, return, exchange, or report problems with their orders',
      },
      {
         title: 'Process returns and exchanges',
         p: 'Automatically checks your store policy and existing inventory before resolving or escalating each request',
      },
   ];
   return (
      <div>
         <h2>Connect to Shopify Store</h2>
         <p>
            Installs the Chad widget in your Shopify store and sets it up to display your customers’
            order information and self-serve options.
         </p>
         <ul>
            <li>
               {ulData.map((item) => {
                  return (
                     <div>
                        <div>
                           <img src={Success} alt="success" />
                        </div>
                        <div>
                           <h3>{item.title}</h3>
                           <p>{item.p}</p>
                        </div>
                     </div>
                  );
               })}
            </li>
         </ul>
         <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: 'rgba(50, 171, 242, 1)', textTransform: 'none' }}
         >
            Connect store
         </Button>
         <p>I don’t use Shopify</p>
      </div>
   );
};

export default ShopifyC;
