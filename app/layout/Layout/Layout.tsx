import { Header } from "../Header";
import { Body } from "../Body";
import type { PropsWithChildren } from "react";
import { Footer } from "../Footer";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <main className="text-fourth flex grow flex-col justify-between bg-c1">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </main>
  );
};

export { Layout };
