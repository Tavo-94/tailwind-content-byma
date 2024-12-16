# Configurar Tailwind CSS en un Proyecto Vite con React y TypeScript

Este documento describe cómo integrar Tailwind CSS en un proyecto creado con Vite, React y TypeScript.

## Requisitos Previos

- Tener un proyecto de Vite con React y TypeScript ya configurado. Si no lo tienes, sigue primero el README para [Inicializar un Proyecto en Vite con React y TypeScript](./README.md).
- Node.js instalado en tu máquina.

## Paso a Paso

### 1. Instalar Tailwind CSS y sus Dependencias

Ejecuta el siguiente comando para instalar Tailwind CSS, autoprefixer y postcss:

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Inicializar la Configuración de Tailwind

Ejecuta este comando para generar el archivo de configuración de Tailwind:

```bash
npx tailwindcss init
```

Esto creará un archivo `tailwind.config.js` en la raíz de tu proyecto.

### 3. Configurar Tailwind para Vite

Edita el archivo `tailwind.config.js` para especificar las rutas de tus archivos donde usarás clases de Tailwind. Asegúrate de incluir todos los archivos `.tsx` dentro de `src/`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Agregar Tailwind a los Estilos Globales

En el archivo `src/index.css` eliminar todo el contenido existente y reemplazarlo con las siguientes directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Luego, asegúrate de importar este archivo en tu `main.tsx`:

```typescript
import "./index.css";
```

Para finalizar, eliminar el archivo `App.css` y modificar el componente `App.tsx` utilizando las clases utilitarias de tailwind.

por ejemplo:

```typescript
function App() {
  return (
    <>
      <section className="container bg-slate-400 mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Vite + React + TS + Tailwind
        </h2>
      </section>
    </>
  );
}

export default App;
```

### 5. Iniciar el Servidor de Desarrollo

Ejecuta el siguiente comando para verificar que Tailwind esté funcionando correctamente:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` y verifica que Tailwind esté aplicando estilos al agregar clases CSS en tus componentes.

### 6. (Opcional) Instalar Plugins de Tailwind

Si necesitas funcionalidades adicionales como formularios o tipografía, puedes instalar los plugins oficiales de Tailwind. Por ejemplo, para formularios:

```bash
npm install -D @tailwindcss/forms
```

Y agrégalo a la sección `plugins` en `tailwind.config.js`:

```javascript
plugins: [require('@tailwindcss/forms')],
```

---

## Recursos Adicionales

- [Documentación Oficial de Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Vite + Tailwind CSS Integration Guide](https://vitejs.dev/guide/features.html#postcss)

¡Listo! Ahora tienes Tailwind CSS integrado en tu proyecto Vite con React y TypeScript. 🎉
