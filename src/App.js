import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components";

const Home = lazy(() => import("./pages/Home/Home"));
const User = lazy(() => import("./pages/User/User"));
const AddRecipe = lazy(() => import("./pages/AddRecipe/AddRecipe"));
const RecipePage = lazy(() => import("./pages/Recipe/RecipePage"));

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/recipe/:recipeId" element={<RecipePage />} />
      <Route path="/recipe/add" element={<AddRecipe />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);
localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmE4MTdiMjQ0MmQ4MmQ2MTQ0MjAwMiIsImlhdCI6MTcxODI1NjAxNywiZXhwIjoxNzE4MzM4ODE3fQ.SdTy598bWBy5PM9ZX91O3uiggHiuYpLkPNGYdpMwQXk",
);
export default App;
