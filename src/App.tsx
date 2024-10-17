<<<<<<< HEAD
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
=======
>>>>>>> 1861f649ba827c05579b89e005037b780482f620
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '@/router/routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
