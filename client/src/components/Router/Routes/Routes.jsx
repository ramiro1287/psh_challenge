import React from 'react';

// Components
import { NotFound } from 'components';

// Pages
import { Home } from 'pages';

// Paths
import * as PATHS from 'constants/routes';

const Routes = () => [
  { path: PATHS.HOME_PATH, element: <Home /> },
  { path: PATHS.NOT_FOUND_PATH, element: <NotFound /> },
];

export default Routes;
