import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
const routes = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/userprofile',
    element: <UserProfile />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
