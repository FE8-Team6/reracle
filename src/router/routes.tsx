import { Home, Login, NotFound, SignUp, Qna, Answer, PasswordReset, MyQuestion } from '@/pages';
import WasteCategoryItems from '@/components/WasteCategoryItems';
import MyPage from '@/components/MyPage/MyPage';
import DetailItems from '@/components/DetailItems';
import { Topic } from '@/pages/Topic';

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
  {
    path: '/:categoryId',
    element: <WasteCategoryItems />,
  },
  {
    path: '/:categoryId/:itemId',
    element: <DetailItems />,
  },
  {
    path: 'qna',
    element: <Qna />,
  },
  {
    path: 'topic',
    element: <Topic />,
  },
  {
    path: 'answer/:questionIndex',
    element: <Answer />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },

  {
    path: 'myquestion',
    element: <MyQuestion />,
  },
];
