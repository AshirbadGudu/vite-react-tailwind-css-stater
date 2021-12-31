import FAV_ICON from "./favicon.svg";
const App = () => {
  return (
    <>
      <main className="bg-gradient-to-tr from-slate-700 to-zinc-500 min-h-screen grid place-items-center">
        <div className="grid place-items-center">
          <img
            src={FAV_ICON}
            alt=""
            className="w-40 h-40 cursor-pointer animate-pulse transition-all hover:-translate-y-2"
          />
          <h1 className="text-white text-4xl">Vite Tailwind CSS React App</h1>
        </div>
      </main>
    </>
  );
};

export default App;
