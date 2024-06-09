import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/";

const Home = lazy(() => import("./pages/Home/Home"));
const User = lazy(() => import("./pages/User/User"));
const RecipePage = lazy(() => import("./pages/Recipe/RecipePage"));

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/recipe" element={<RecipePage />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default App;
