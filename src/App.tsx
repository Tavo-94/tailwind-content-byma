import { PlusCircle, Trash2, User } from 'lucide-react'
import './App.css'
import AfterTWDemo from './components/before-after-demo/AfterTWDemo'
import BeforeDemo from './components/before-after-demo/BeforeDemo'
import ButtonConIA from './components/button-demo/ButtonConIA'
import TailwindButton from './components/button-demo/ButtonDemo'
import InputConIA from './components/input-demo/InputConIA'
import FlexboxDemo, {
    BasicFlexDemo,
    Footer,
    HeaderLayout,
    ImageGallery,
    Navbar,
    ProductGrid,
} from './components/layout-demo/FlexboxDemo'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import ComboBox from './components/ComboBoxConIA'
import { BasicLayout, CardGalleryGrid, ComplexLayout, ComplexLayoutWithHiddenSideBar, DashboardGrid, ImageGalleryGrid, ResponsiveFormGrid, ResponsiveThreeColumnGrid, SubgridCards } from './components/layout-demo/GridDemo'

interface FormValues {
    country: string
}

function App() {
    const [selectedCountry, setSelectedCountry] = useState('')

    const handleCountryChange = (value: string) => {
        setSelectedCountry(value)
        console.log('País seleccionado:', value)
    }

    return (
        <>
            <section className="container mx-auto grid grid-cols-1 gap-6 bg-gray-300">
                <h2 className="text-center text-3xl font-bold">
                    Vite + React + TS + Tailwind
                </h2>
                {/* <button className="m-6 flex transform items-baseline justify-center rounded-lg border border-gray-300 bg-gray-100 p-4 text-center text-xs text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:bg-red-100 sm:text-left sm:text-sm sm:text-gray-800 md:bg-green-100 md:text-right md:text-base md:text-gray-900 lg:flex lg:items-center lg:justify-between lg:bg-blue-100 lg:text-lg lg:text-gray-600 xl:flex-col xl:bg-yellow-100 xl:text-xl xl:text-gray-500 2xl:flex-row 2xl:bg-purple-100 2xl:text-2xl 2xl:text-gray-400">
          Este es un button con muchas clases de Tailwind CSS
        </button> */}

                {/* <button className="custom-div">Este es un button custom con css</button> */}

                {/* <BeforeDemo />
        <AfterTWDemo /> */}

                {/* <div className="flex justify-center">
          <TailwindButton
            label="Primary"
            variant="primary"
            onClick={() => {
              console.log("Primary button clicked");
            }}
          />
        </div> */}

                {/* <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 sm:max-w-md md:max-w-lg">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
            Tarjeta Personalizada
          </h2>
          <p className="mb-6 text-gray-600 sm:text-lg">
            Este es un ejemplo de una tarjeta hecha con Tailwind CSS, responsiva
            y personalizada.
          </p>
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:w-auto">
            Ver Más
          </button>
        </div> */}

                {/* <div className="flex justify-center">
          <ButtonConIA
            iconLeft={<PlusCircle size={24} />}
            iconRight={<Trash2 size={24} />}
            variant="primary"
            size="medium"
          >
            Saludar
          </ButtonConIA>
        </div>
        <div className="flex max-w-md justify-center">
          <InputConIA
            className=""
            variant="default"
            iconLeft={<User size={24} />}
            iconRight={
              <Trash2
                onClick={() => alert("logica para borrar el campo")}
                className="hover:cursor-pointer"
                size={24}
              />
            }
            tamaño="large"
            label="Nombre"
          />
        </div> */}

                {/* ! Flexbox Demo */}

                <BasicFlexDemo />
                <FlexboxDemo />
                <Navbar />
                <ProductGrid />
                <HeaderLayout />
                <Footer />
                <ImageGallery />

                <div className="bg-byma-primary shadow-byma-primary mx-auto mt-10 min-h-96 max-w-md rounded-lg p-4 shadow-md">
                    <h1 className="mb-4 text-lg font-semibold text-gray-700 dark:text-white">
                        Selecciona un País
                    </h1>
                    <ComboBox
                        label="País"
                        options={[
                            { value: 'ar', label: 'Argentina' },
                            { value: 'br', label: 'Brasil' },
                            { value: 'cl', label: 'Chile' },
                        ]}
                        placeholder="Seleccione un país"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    />
                </div>
            </section>

            <section className="container mx-auto grid grid-cols-1 gap-4">
                <h2>Grid Demo</h2>
                <ResponsiveThreeColumnGrid />
                <CardGalleryGrid />
                <DashboardGrid />
                <ImageGalleryGrid />
                <ResponsiveFormGrid />
                <BasicLayout />
                <ComplexLayout />
                <ComplexLayoutWithHiddenSideBar />
                <SubgridCards />
            </section>
        </>
    )
}

export default App
