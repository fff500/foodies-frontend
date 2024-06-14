import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components";
import { useIsAuth } from "./hooks/";

const Home = lazy(() => import("./pages/Home/Home"));
const User = lazy(() => import("./pages/User/User"));
const AddRecipe = lazy(() => import("./pages/AddRecipe/AddRecipe"));
const RecipePage = lazy(() => import("./pages/Recipe/RecipePage"));
const PrivateRoutes = lazy(() => import("./pages/PrivateRoutes/PrivateRoutes"));

const App = () => {
  const { isAuth } = useIsAuth();
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<PrivateRoutes isAuth={isAuth} />}>
          <Route path="user/:userId" element={<User />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="recipe/add" element={<AddRecipe />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
