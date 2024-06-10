import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Breadcrumbs } from "../Breadcrumbs";

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
