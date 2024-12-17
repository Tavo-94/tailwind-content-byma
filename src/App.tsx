import "./App.css";
import AfterTWDemo from "./components/before-after-demo/AfterTWDemo";
import BeforeDemo from "./components/before-after-demo/BeforeDemo";
import TailwindButton from "./components/button-demo/ButtonDemo";

function App() {
  return (
    <>
      <section className="container mx-auto grid grid-cols-1 gap-6 bg-slate-400 p-6">
        <h2 className="text-center text-3xl font-bold">
          Vite + React + TS + Tailwind
        </h2>
        <div className="m-6 flex transform items-baseline justify-center rounded-lg border border-gray-300 bg-gray-100 p-4 text-center text-xs text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:bg-red-100 sm:text-left sm:text-sm sm:text-gray-800 md:bg-green-100 md:text-right md:text-base md:text-gray-900 lg:flex lg:items-center lg:justify-between lg:bg-blue-100 lg:text-lg lg:text-gray-600 xl:flex-col xl:bg-yellow-100 xl:text-xl xl:text-gray-500 2xl:flex-row 2xl:bg-purple-100 2xl:text-2xl 2xl:text-gray-400">
          Este es un div con muchas clases de Tailwind CSS
        </div>

        <div className="custom-div">
          Este es un div custom con css
        </div>

        <BeforeDemo />
        <AfterTWDemo />

        <div className="flex justify-center">
          <TailwindButton
            label="Primary"
            variant="primary"
            onClick={() => {
              console.log("Primary button clicked");
            }}
          />
        </div>
      </section>
    </>
  );
}

export default App;
