import { useLoaderData } from "@remix-run/react";

export default function Index() {
  const {} = useLoaderData();

  return <div className="flex flex-col">Hello world</div>;
}
