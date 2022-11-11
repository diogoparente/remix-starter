import { Link as RemixLink } from "@remix-run/react";
import type { PropsWithChildren } from "react";

interface LinkProps {
  url: string;
  isExternal?: boolean;
  extraClassNames?: string;
}

const Link = ({
  isExternal,
  url,
  children,
  extraClassNames,
}: PropsWithChildren<LinkProps>) => {
  const baseClassName =
    "hover:underline text-c4 hover:decoration-c4 underline-offset-8 hover:dark:decoration-c4 hover:opacity-50 hover:transition-opacity";
  const L = () =>
    isExternal ? (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${baseClassName} ${extraClassNames ?? ""}`}
      >
        {children}
      </a>
    ) : (
      <RemixLink
        to={url}
        className={`${baseClassName} ${extraClassNames ?? ""}`}
      >
        {children}
      </RemixLink>
    );
  return <L />;
};

export { Link };
