import { MoonIcon } from "../icons/MoonIcon";

export const Header = () => {
  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between pt-2">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
          TODO
        </h1>
        <button>
          <MoonIcon className="fill-red-500"></MoonIcon>
        </button>
      </div>
    </header>
  );
};
