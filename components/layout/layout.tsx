import { Fragment } from "react";
import Footer from "../home-page/footer";
import MainNavigation from "./main-navigation";

function Layout({ children }: { children: any }) {
  return (
    <Fragment>
      <MainNavigation />
      <main className="h-[80vh]">{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
