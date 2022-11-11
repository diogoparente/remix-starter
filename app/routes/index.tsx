import { Layout } from "~/layout/Layout";
import Home from "~/views/home";

import data from "./data";

export async function loader() {
  return { ...data };
}

export default function () {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
