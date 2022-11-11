import { Theme, useTheme } from "~/utils/theme-provider";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <label
      tabIndex={0}
      title="theme switcher"
      id="theme-switch"
      className="relative inline-flex cursor-pointer items-center content-[''] after:content-['']"
    >
      <input
        type="checkbox"
        value=""
        id="default-toggle"
        className="peer sr-only"
        role="switch"
        checked={theme === Theme.DARK}
        aria-labelledby="theme-switch"
        readOnly
      />
      <button
        aria-label="toggle-theme"
        onClick={toggleTheme}
        className="glow dark:hover:c1-light peer h-7 w-12 rounded-full bg-c3 after:absolute after:top-[13%] after:left-[9%] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:text-center after:transition-all after:content-[''] hover:bg-c2 peer-checked:after:translate-x-full peer-checked:after:translate-x-full peer-focus:outline-none dark:after:border-c2 dark:after:bg-c5-light dark:hover:border dark:hover:border-c3"
      />
    </label>
  );
};

export { ThemeToggle };
