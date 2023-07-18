import { CrossIcon } from "./components/icons/CrossIcon";
import { MoonIcon } from "./components/icons/MoonIcon";

export const App = () => {
  return (
    <div className="bg-no-repeat bg-gray-300 min-h-screen bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain">
      <header className="container mx-auto px-4">
        <div className="flex justify-between pt-2">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
            TODO
          </h1>
          <button>
            <MoonIcon className="fill-red-500"></MoonIcon>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-3 inline-block h-3"></span>
          <input
            type="text"
            className="w-full text-gray-400 outline-none"
          ></input>
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-3 inline-block h-3 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse in bluuweb
            </p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-3 inline-block h-3 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse in bluuweb
            </p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-3 inline-block h-3 flex-none"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse in bluuweb
            </p>
            <button>
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <section className="px-4 py-4 flex">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-500">All</button>
          <button className="hover:text-blue-500">Active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};
