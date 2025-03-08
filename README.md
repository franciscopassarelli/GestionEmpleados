# Sistema de Gestión de Empleados

Este es un desafío de desarrollo **frontend** y **backend**, en el cual se tiene que gestionar la información de empleados en una plataforma sencilla, utilizando tecnologías **Next.js**, **React**, y **MySQL**. La aplicación está diseñada para ser eficiente y permitir la gestión completa de los empleados desde un formulario de alta, hasta la edición y eliminación de registros.
Este proyecto me demoró un total de 14 hs estimado entre rutas, front y el mayor tiempo en el backend al utilizar MySql.

## Descripción del Proyecto

Este proyecto permite gestionar la información de empleados a través de un sistema que incluye funcionalidades de alta, edición, eliminación y visualización de registros. Se ha implementado tanto un **backend** en **Next.js** como un **frontend** en el mismo framework, asegurando una integración fluida entre la interfaz de usuario y la base de datos. La aplicación es completamente **responsive**, adaptándose a diferentes tamaños de pantalla.

## Funcionalidades

- **Alta de Empleados**: Los usuarios pueden registrar nuevos empleados completando un formulario con los siguientes datos:
  - Nombre Completo
  - Documento de Identidad
  - Fecha de Nacimiento
  - Estado de Desarrollador (Sí/No)
  - Descripción breve

- **Listado de Empleados**: Los usuarios pueden visualizar todos los empleados dados de alta en la plataforma. Los datos se muestran en una lista **paginada** y **filtrable**.

- **Editar Empleado**: Los usuarios pueden editar la información de cualquier empleado registrado en el sistema.

- **Eliminar Empleado**: Los usuarios pueden eliminar empleados de la lista.

- **Validación de Formularios**: Se implementan validaciones para asegurar que la información ingresada sea correcta y completa.

- **Interfaz Adaptativa**: El diseño es **responsive** y se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **Next.js**: Framework para aplicaciones React con soporte para renderizado del lado del servidor (SSR) y generación de aplicaciones estáticas.
- **React**: Librería de JavaScript para construir interfaces de usuario interactivas.
- **MySQL**: Base de datos relacional para almacenar los datos de los empleados.
- **Node.js**: Entorno de ejecución para el servidor backend.
- **CSS Modules**: Estilos modularizados y específicos para cada componente de la aplicación.
- **JavaScript (ES6+)**: Lenguaje para la lógica de la aplicación.
- **Vercel**: Hosting para el despliegue de la aplicación (si se quiere utilizar).
- **API RESTful**: Para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de los empleados.

## Estructura del Proyecto

### Backend (API REST):

**API Endpoints**:
- `POST /api/empleados`: Para crear un nuevo empleado.
- `GET /api/empleados`: Para obtener el listado de empleados.
- `PUT /api/empleados/:id`: Para actualizar los datos de un empleado existente.
- `DELETE /api/empleados/:id`: Para eliminar un empleado.

**Base de datos**:
La base de datos **MySQL** contiene una tabla `empleados` con las siguientes columnas:
- `id`: Identificador único del empleado.
- `fullName`: Nombre completo del empleado.
- `idNumber`: Documento de identidad del empleado.
- `birthDate`: Fecha de nacimiento del empleado.
- `isDeveloper`: Indicador de si el empleado es desarrollador.
- `description`: Breve descripción sobre el empleado.

### Frontend:

**Páginas**:
- **Agregar Empleado**: Formulario para ingresar los datos de un nuevo empleado.
- **Lista de Empleados**: Visualiza la lista de empleados con opciones para editar y eliminar.

**Componentes**:
- **Formulario de alta de empleado**: Para ingresar los datos del nuevo empleado.
- **Listado de empleados**: Muestra todos los empleados registrados, con opciones de búsqueda, edición y eliminación.
