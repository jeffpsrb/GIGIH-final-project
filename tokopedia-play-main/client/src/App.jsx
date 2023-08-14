import { RouterProvider } from 'react-router-dom';
import router from './routes';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  );
}

export default App;
