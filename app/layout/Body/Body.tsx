import type { PropsWithChildren } from "react";

const Body = ({ children }: PropsWithChildren<{}>) => {
  return <div className="flex flex-1 flex-col">{children}</div>;
};

export { Body };
