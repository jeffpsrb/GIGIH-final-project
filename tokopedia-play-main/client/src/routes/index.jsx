import { Navigate, createBrowserRouter } from 'react-router-dom';
import Videos from '../components/Videos';
import Video from '../components/Video';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/videos" replace={true} />,
  },
  {
    path: '/videos',
    element: <Videos />,
  },
  {
    path: '/videos/:videoId',
    element: <Video />,
  },
]);

export default router;
