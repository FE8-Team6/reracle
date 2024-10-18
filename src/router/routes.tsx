import { Home, Login, NotFound, SignUp } from '@/pages';
import WasteCategoryItems from '@/components/WasteCategoryItems';
import MyPage from '@/components/MyPage/MyPage';
import DetailItems from '@/components/DetailItems';
import { Topic } from '@/pages/Topic';
import { PasswordReset } from '@/pages/PasswordReset';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/pwreset',
    element: <PasswordReset />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
