import { useRouter } from "next/router";
import { Fragment } from "react";
import Footer from "../home-page/footer";
import MainNavigation from "./main-navigation";

function Layout({ children }: { children: any }) {
  const router = useRouter();

  return (
    <Fragment>
      {router.pathname !== "/survey" && <MainNavigation />}
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
