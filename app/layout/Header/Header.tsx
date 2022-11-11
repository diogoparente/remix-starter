import { ThemeToggle } from "~/components/ThemeToggle/";
import { Link } from "~/typography";

const Header = () => {
  return (
    <header className="flew-row flex items-center justify-between bg-transparent p-4 text-xl font-semibold">
      <div className="header-badge glow">
        <Link url={"/"}>Home</Link>
      </div>
      <ThemeToggle />
    </header>
  );
};

export { Header };
