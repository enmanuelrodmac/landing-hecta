# Hecta 3.0

Hecta 3.0 es una plataforma innovadora que fusiona tecnología y sostenibilidad para revolucionar la agricultura. Este proyecto utiliza React y Vite para una experiencia de desarrollo rápida y moderna.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Internacionalización (i18n)](#internacionalización-i18n)
- [Dependencias](#dependencias)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/agritech-advance.git
   cd agritech-advance
   npm install
   ```

   
### Scripts Disponibles

```markdown
## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Inicia la aplicación en modo de desarrollo.  
Abre [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si haces ediciones.  
También verás errores de lint en la consola.

### `npm run build`

Compila la aplicación para producción en la carpeta `dist`.  
Empaqueta React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

### `npm run preview`

Previsualiza la aplicación compilada en modo de producción.

### `npm run lint`

Ejecuta ESLint para encontrar y corregir problemas en tu código.

## Internacionalización (i18n)

Este proyecto utiliza `react-i18next` para manejar la internacionalización. Los archivos de traducción se encuentran en el directorio `src/locales/` y están organizados por idioma (`en` y `es`).

### Añadir un nuevo idioma

1. Crea una nueva carpeta dentro de `src/locales/` con el código del idioma.
2. Añade un archivo `translation.json` con las traducciones correspondientes.
3. Actualiza `i18n.js` para incluir el nuevo idioma en los recursos.

## Dependencias

- i18next: ^23.11.5
- normalize.css: ^8.0.1
- react: ^18.2.0
- react-dom: ^18.2.0
- react-i18next: ^14.1.2
- react-router-dom: ^6.23.1
- react-transition-group: ^4.4.5

## Dependencias de desarrollo

- @types/react: ^18.2.66
- @types/react-dom: ^18.2.22
- @vitejs/plugin-react: ^4.2.1
- eslint: ^8.57.0
- eslint-plugin-react: ^7.34.1
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.6
- vite: ^5.2.0
