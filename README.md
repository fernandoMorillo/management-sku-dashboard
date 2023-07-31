# Proyecto de SKU (Stock Keeping Unit) Management Dashboard

Este proyecto es una aplicación web desarrollada en React que muestra una tabla de datos con paginación y filtrado. Permite a los usuarios buscar información por ID o nombre, ordenar la tabla por ID o nombre, y seleccionar cuántos datos desean ver por página.

## Funcionalidades

- Buscar por ID o nombre: Los usuarios pueden ingresar un término de búsqueda en el campo de búsqueda para filtrar los datos por ID o nombre.

- Ordenar la tabla: Los usuarios pueden hacer clic en los encabezados de las columnas para ordenar la tabla por ID o nombre en orden ascendente o descendente.

- Paginación: Los datos se muestran en páginas y los usuarios pueden navegar entre las diferentes páginas utilizando los botones "Anterior" y "Siguiente".

- Selección de cantidad de datos por página: Los usuarios pueden seleccionar cuántos datos desean ver por página utilizando un menú desplegable.

## Cómo ejecutar el proyecto

1. Clona el repositorio en tu máquina local.

2. Abre una terminal en la carpeta del proyecto.

3. Instala las dependencias utilizando el siguiente comando:

npm install


## Cómo ejecutar el proyecto
npm run start-all
Con este comando se ejecuta tanto el backend con el frontend.

## Si desea ejecutar el proxy y front por separado ejecute los siguientes comandos:

npm run start-back
Este comando solo ejecutará el Backend de la aplicación.

npm start
Al ejecutar este comando se correrá solamente el front y el consumo de la API se vería afectado.


La aplicación se ejecutará en el navegador en la dirección http://localhost:4000.


## Recursos y tecnologías utilizadas

React: Biblioteca de JavaScript para construir interfaces de usuario.

API de datos: Se utiliza una API para obtener los datos que se mostrarán en la tabla.

Autor
Fernando Morillo
