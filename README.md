# tailwind-content-byma

## Inicializar un Proyecto en Vite con React y TypeScript

Paso a paso de la configuracion de un nuevo proyecto utilizando Vite con React y TypeScript.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js** (versión 16.0.0 o superior): [Descargar Node.js](https://nodejs.org/)
- **npm** o **yarn** como gestor de paquetes

## Paso a Paso

### 1. Crear el Proyecto

Ejecuta el siguiente comando en tu terminal para crear un nuevo proyecto:

```bash
npm create vite@latest nombre-del-proyecto
```

Luego, selecciona las siguientes opciones:

- **Framework**: React
- **Variante**: TypeScript

### 2. Acceder al Directorio del Proyecto

Navega al directorio recién creado:

```bash
cd nombre-del-proyecto
```

### 3. Instalar las Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```


### 4. Iniciar el Servidor de Desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará un servidor en modo desarrollo, y podrás acceder a tu aplicación en tu navegador en `http://localhost:5173`.

### 5. Estructura Inicial del Proyecto

Una vez creado el proyecto, la estructura inicial será similar a esta:

```
nombre-del-proyecto/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   ├── index.css
│   └── assets/
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 6. Personalizar tu Proyecto

Puedes comenzar a editar los archivos dentro de la carpeta `src/` para desarrollar tu aplicación.

### 7. Construir para Producción

Cuando estés listo para publicar tu aplicación, utiliza el siguiente comando para construir el proyecto:

```bash
npm run build
```


El resultado se encontrará en la carpeta `dist/`.

### 8. Previsualizar la Versión de Producción

Para probar la versión de producción localmente, ejecuta:

```bash
npm run preview
```

Esto levantará un servidor local para previsualizar tu aplicación construida.

---

## Recursos Adicionales

- [Documentación Oficial de Vite](https://vitejs.dev/)
- [Documentación de React](https://reactjs.org/)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)
