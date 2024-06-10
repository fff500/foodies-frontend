import { Suspense } from "react";
import { Breadcrumbs } from "../../Breadcrumbs/";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Breadcrumbs />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
