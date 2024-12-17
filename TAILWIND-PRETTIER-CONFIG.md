
# Guía de instalación y configuración de Prettier para Tailwind CSS

Esta guía te ayudará a configurar Prettier junto con el plugin de Tailwind CSS para ordenar las clases de acuerdo con la recomendación de Tailwind.

## Requisitos previos

Antes de comenzar, asegúrate de tener los siguientes elementos instalados en tu proyecto:

- Node.js
- npm

## Pasos para la instalación

1. **Instalar Prettier y el plugin de Tailwind CSS**

   Primero, instala Prettier y el plugin de Tailwind CSS usando npm o yarn.

   Si estás usando npm:

   ```bash
    npm install -D prettier prettier-plugin-tailwindcss   
    ```

2. **Configurar Prettier**

   Crea un archivo de configuración para Prettier en la raíz de tu proyecto. El archivo puede ser `.prettierrc` o `prettier.config.js`. Si ya tienes uno, solo agrega la configuración del plugin.

   Si aún no tienes el archivo `.prettierrc`, crea uno con el siguiente contenido:

   ```json
   {
     "plugins": ["prettier-plugin-tailwindcss"]
   }
   ```

## Cómo ordenar las clases de Tailwind

Con el plugin `prettier-plugin-tailwindcss`, las clases de Tailwind se ordenarán automáticamente de acuerdo con las mejores prácticas recomendadas por Tailwind CSS. El orden de clases será:

1. **Layout**
2. **Typography**
3. **Color**
4. **Spacing**
5. **Sizing**
6. **Border**
7. **Effects**
8. **Others**

Esto garantiza que el código CSS generado siga un orden lógico y fácil de mantener.

## Uso con VS Code (opcional)

Si estás utilizando VS Code, puedes instalar la extensión de Prettier para que el formateo se realice automáticamente al guardar tus archivos.

1. Abre VS Code.
2. Dirígete a la sección de Extensiones (Ctrl+Shift+X).
3. Busca "Prettier - Code formatter" e instálalo.
4. Asegúrate de que la opción **Format On Save** esté habilitada. Para hacerlo, ve a **Settings** (Ctrl+,), busca `Format On Save` y activa la casilla correspondiente.

## Recursos adicionales

- [Documentación de Prettier](https://prettier.io/docs/en/configuration)
- [Documentación de Tailwind CSS](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)

¡Con estos pasos, tu proyecto debería estar configurado para usar Prettier con el plugin de Tailwind y ordenar automáticamente las clases de acuerdo con las mejores prácticas!
