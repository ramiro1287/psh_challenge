import { useRoutes } from 'react-router-dom';
import Routes from './Routes/Routes';

const AppRoutes = () => {
  const routes = useRoutes(Routes());

  return routes;
};

export default AppRoutes;
