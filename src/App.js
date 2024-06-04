import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/layout/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const User = lazy(() => import('./pages/User/User'));
const Recipe = lazy(() => import('./pages/Recipe/Recipe'));

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default App;
