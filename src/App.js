import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const User = lazy(() => import("./pages/User/User"));
const AddRecipe = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
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

export default App;
