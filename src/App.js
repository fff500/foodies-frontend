import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";
import { LoadingSpinner, SharedLayout } from "./components";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const User = lazy(() => import("./pages/User/User"));
const AddRecipe = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const RecipePage = lazy(() => import("./pages/Recipe/RecipePage"));
const PrivateRoutes = lazy(() => import("./pages/PrivateRoutes/PrivateRoutes"));

const App = () => {
  const [isAuth] = useLocalStorage({ key: "token" });
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="/" element={<PrivateRoutes isAuth={isAuth} />}>
            <Route path="/user" element={<User />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="recipe/add" element={<AddRecipe />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
