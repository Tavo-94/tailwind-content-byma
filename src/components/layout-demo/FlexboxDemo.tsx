type Props = {}

function FlexboxDemo({}: Props) {
    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="rounded bg-white p-6 shadow">
                    <p className="text-gray-800">Contenido centrado</p>
                </div>
            </div>
            <div className="flex h-screen">
                <aside className="w-1/4 bg-gray-800 p-4 text-white">
                    <p>Sidebar</p>
                </aside>
                <main className="flex-1 bg-gray-100 p-6">
                    <p>Contenido principal</p>
                </main>
            </div>
            <div className="flex justify-between bg-gray-200 p-6">
                <div className="bg-blue-500 p-4 text-white">Elemento 1</div>
                <div className="bg-green-500 p-4 text-white">Elemento 2</div>
                <div className="bg-red-500 p-4 text-white">Elemento 3</div>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-6">
                <div className="text-gray-800">Logo</div>
                <nav className="flex gap-4">
                    <a href="#" className="text-blue-500">
                        Inicio
                    </a>
                    <a href="#" className="text-blue-500">
                        Servicios
                    </a>
                    <a href="#" className="text-blue-500">
                        Contacto
                    </a>
                </nav>
            </div>
            <div className="flex flex-col items-center bg-gray-50 p-6">
                <div className="mb-2 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="mb-2 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="bg-red-500 p-4 text-white">Elemento 3</div>
            </div>
            <div className="flex bg-gray-100 p-6">
                <div className="order-2 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="order-1 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="order-3 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto bg-gray-200 p-6">
                <div className="h-32 w-48 flex-none bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="h-32 w-48 flex-none bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="h-32 w-48 flex-1 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! Layouts responsivos
        </>
    )
}

export const BasicFlexDemo: React.FC = () => {
    return (
        <article className="grid min-h-screen grid-cols-1 gap-4">
            //! flexbox basico
            <div className="flex border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content start
            <div className="flex justify-start border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content end
            <div className="flex justify-end border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content center
            <div className="flex justify-center border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content space between
            <div className="flex justify-between border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content space around
            <div className="flex justify-around border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            //! flexbox Justify content space evenly
            <div className="flex justify-evenly border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-1 gap-4">
                <div className="flex h-screen flex-col justify-start border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
                <div className="flex h-screen flex-col justify-end border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
                <div className="flex h-screen flex-col justify-center border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
                <div className="flex h-screen flex-col justify-between border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
                <div className="flex h-screen flex-col justify-around border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
                <div className="flex h-screen flex-col justify-evenly border-2 border-gray-950 bg-gray-500">
                    <div className="size-60 bg-blue-500 p-4 text-white">
                        Elemento 1
                    </div>
                    <div className="size-60 bg-green-500 p-4 text-white">
                        Elemento 2
                    </div>
                    <div className="size-60 bg-red-500 p-4 text-white">
                        Elemento 3
                    </div>
                </div>
            </div>
            <h2>Aling Items</h2>
            <div className="flex h-96 items-start border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="flex h-96 items-center border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="flex h-96 items-end border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="flex h-96 items-stretch border-2 border-gray-950 bg-gray-500">
                <div className="min-h-60 min-w-60 bg-blue-500 p-4 text-white">
                    Elemento 1
                </div>
                <div className="min-h-60 min-w-60 bg-green-500 p-4 text-white">
                    Elemento 2
                </div>
                <div className="min-h-60 min-w-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
            <div className="flex min-h-96 items-baseline border-2 border-gray-950 bg-gray-500">
                <div className="size-60 bg-blue-500 p-24 text-white">
                    Elemento 1
                </div>
                <div className="size-60 bg-green-500 p-48 text-white">
                    Elemento 2
                </div>
                <div className="size-60 bg-red-500 p-4 text-white">
                    Elemento 3
                </div>
            </div>
        </article>
    )
}

export const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-col bg-blue-500 p-4 text-white sm:flex-row sm:justify-between">
            {/* @info Layout adaptable: En móvil, los elementos están en columna. En tablet y desktop se distribuyen en fila y ocupan espacio entre los extremos. */}
            <div className="mb-2 sm:mb-0">Logo</div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <a href="#" className="mb-2 sm:mb-0">
                    Inicio
                </a>
                <a href="#" className="mb-2 sm:mb-0">
                    Servicios
                </a>
                <a href="#">Contacto</a>
            </div>
        </nav>
    )
}

export const ProductGrid: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            {/* @info Layout adaptable:
             - Móvil: Una columna (w-full).
             - Tablet: Dos columnas (sm:basis-2/5).
             - Desktop: Cuatro columnas (lg:basis-1/5). */}
            {Array.from({ length: 4 }, (_, i) => (
                <div
                    key={i}
                    className="w-full flex-initial bg-gray-200 p-4 sm:basis-2/5 lg:basis-1/5"
                >
                    Producto {i + 1}
                </div>
            ))}
        </div>
    )
}

export const HeaderLayout: React.FC = () => {
    return (
        <div className="flex h-screen flex-col lg:flex-row">
            {/* @info Layout adaptable:
             - Móvil: Cabecera y contenido en columna.
             - Desktop: Cabecera a la izquierda y contenido a la derecha. */}
            <header className="h-16 bg-blue-500 p-4 text-white lg:h-full lg:w-1/4">
                Cabecera
            </header>
            <main className="flex-1 bg-gray-100 p-4">Contenido principal</main>
        </div>
    )
}

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col bg-gray-800 p-4 text-white sm:flex-row sm:justify-between">
            {/* @info Layout adaptable:
             - Móvil: Links en columna.
             - Tablet y Desktop: Links distribuidos horizontalmente. */}
            <div>© 2024 Mi Empresa</div>
            <div className="mt-2 flex flex-col sm:mt-0 sm:flex-row sm:gap-4">
                <a href="#">Política de privacidad</a>
                <a href="#">Términos de uso</a>
                <a href="#">Contacto</a>
            </div>
        </footer>
    )
}

export const ImageGallery: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 p-4">
            {/* @info Layout adaptable:
             - Móvil: Una imagen por fila (w-full).
             - Tablet: Dos imágenes por fila (sm:w-1/2).
             - Desktop: Tres imágenes por fila (lg:w-1/3). */}
            {Array.from({ length: 6 }, (_, i) => (
                <div
                    key={i}
                    className="w-full bg-gray-200 p-4 sm:w-1/2 lg:w-1/3"
                >
                    Imagen {i + 1}
                </div>
            ))}
        </div>
    )
}

export default FlexboxDemo
