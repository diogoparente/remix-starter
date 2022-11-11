import { Link } from "../../typography";

const links = [
  {
    isExternal: true,
    url: "https://github.com/diogoparente",
    children: "Github",
    key: "github",
  },
];

const Footer = () => {
  return (
    <footer className="h-40 w-full bg-c2 p-8 px-4 font-semibold text-c4">
      <div className="flex min-h-full min-w-full flex-col justify-between">
        <div className="flex justify-around">
          <div className="mb-2 flex min-w-[50%] flex-wrap justify-around">
            {links.map(({ key, children, ...link }): JSX.Element => {
              return (
                <Link key={key} {...link} extraClassNames={"ml-1 mr-1"}>
                  {children}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
