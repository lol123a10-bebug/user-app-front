import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Root } from 'app/Root';
import { LoaderWithOverlay } from 'shared/ui';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Suspense fallback={<LoaderWithOverlay />}>
      <HelmetProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
);
